import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";

export const EditPost = ({
    match: {
      params: { id }
    }
    }) => {
    const [status,setStatus]=useState("");
    const [disabled, setDisabled]=useState(false);
    const [values, setValues ]= useState({title:"제목", text:'내용'});
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }
    const newPost = {제목:values.title, 내용:values.text};
    const handleSubmit = async (e) => {
        try{
            setDisabled(true);
            e.preventDefault();
            setSubmitting(true);
            await Axios.put(`http://localhost:4000/posts/${id}/edit`, newPost);
            setSubmitting(false);
            setStatus("게시물이 성공적으로 수정되었습니다.");
            setTimeout(() => setStatus(""), 3000);
            alert(`게시물이 수정되었습니다.`);
            setDisabled(false);
        } catch (err){
            setStatus("게시물을 수정할 수 없습니다.");
        }
    }

    return (
        <div>
            {/* https://penguingoon.tistory.com/188 (onSubmit에 대한 설명) */}
            {submitting &&<div>Submtting Form...</div>}
            <form onSubmit={handleSubmit}>
                <label>
                  제목:
                  <input type="text" name="title" value={values.title} onChange={handleChange}/>
                </label>
                <label>
                  내용:
                  <input
                  type="textarea"
                  name="text"
                  value={values.text}
                  onChange={handleChange}
                  />
                </label>
                <button type="submit" disabled={disabled}>게시물 수정하기</button>
            </form>
            {status && <Redirect to={`/posts/${id}`} />}
        </div>

      );
};


