import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";

export const UploadPost = (req,id) => {
    const [status,setStatus]=useState("");
    const [disabled, setDisabled] = useState(false);
    const [title, setTitle] = useState("");
    const handleChange = ({ target: { value } }) => setTitle(value);
    const post = {제목:title, 내용:"네번째 게시물입니다."};
    const handleSubmit = async (e) => {
        
        try{
            setDisabled(true);
            e.preventDefault();
            const response = await Axios.post(`http://localhost:4000/posts/upload`,
            post);
            setStatus("게시물이 성공적으로 게시되었습니다.");
            setTimeout(() => setStatus(""), 3000);
            if (title.length <= 1) {
                alert("제목을 입력하세요.");
              } else {
                alert(`제목: ${title}`);
              }
            setDisabled(false);
        } catch (err){
            setStatus("게시물을 게시할 수 없습니다.");
        }
        

    }
    return (
        <div>
            {/* https://penguingoon.tistory.com/188 (onSubmit에 대한 설명) */}
            <form onSubmit={handleSubmit}>
                <label>
                  제목:
                  <input type="text" name="title" value={title} onChange={handleChange}/>
                </label>
                <button type="submit" disabled={disabled}>게시물 올리기</button>
            </form>
            {status && <Redirect to="/" />}
        </div>

      );
};


