import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { Redirect } from "react-router-dom";

export const EditPost = ({
    match: {
      params: { id }
    }
    }) => {
    const loggedInUser = sessionStorage.getItem("user");
    const [status,setStatus]=useState("");
    const [disabled, setDisabled]=useState(false);
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState();
    const [owner,setOwner] = useState();
    const [values, setValues ]= useState({title:"", text:""});
    const [submitting, setSubmitting] = useState(false);

    const setInitialValue = async (id) => {
      try {
          const {data :post} = await axios.get(`http://localhost:4000/posts/${id}`);
          setPost(post);
          setOwner(post.owner._id);
          setValues({title:post.제목,text:post.내용})
      } catch (err) {
          console.log(err.response);
      } finally {
          setLoading(false);
      }

    };

    useEffect(()=>{
      setInitialValue(id);
    }, []);

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
            const data = await axios.put(`http://localhost:4000/posts/${id}/edit`, newPost);
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
         {(owner!==undefined && owner !== loggedInUser) && <Redirect to={`/posts/${id}`}/>}
         {loading && < Loader />}
         {post && 
           <div>
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
          </div>}
      </div>
      );
};


