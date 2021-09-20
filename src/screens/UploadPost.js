import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export const UploadPost = () => {
    const [status,setStatus]=useState("");
    const [disabled, setDisabled]=useState(false);
    const [values, setValues]=useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }
    const post = {제목:values.title, 내용:values.text, createdAt:Date.now()};
    const handleSubmit = async (e) => {
        try{
            setDisabled(true);
            e.preventDefault();
            await axios.post(`http://localhost:4000/posts/upload`, post);
            setStatus("게시물이 성공적으로 게시되었습니다.");
            setTimeout(() => setStatus(""), 3000);
            alert(`게시물이 등록되었습니다.`);
            setDisabled(false);
        } catch (err){
            setStatus("게시물을 게시할 수 없습니다.");
            console.log(err.response);
        }
    }

    return (
        <div>
            {/* https://penguingoon.tistory.com/188 (onSubmit에 대한 설명) */}
            <form onSubmit={handleSubmit}>
                <label>
                  제목:
                  <input type="text" name="title" value={values.title || ''} onChange={handleChange}/>
                </label>
                <label>
                  내용:
                  <input
                  type="textarea"
                  name="text"
                  value={values.text || ''}
                  onChange={handleChange}
                  />
                </label>
                <button type="submit" disabled={disabled}>게시물 올리기</button>
            </form>
            {status && <Redirect to="/" />}
        </div>

      );
};


