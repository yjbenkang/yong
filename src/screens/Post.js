import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import api from "../api";

export default function Post({
    match: {
      params: { id }
    }
  })  {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState();
    async function getOnePost() {
        try {
            const {data :post} = await api.getPost(id);
            setPost(post);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }

    };
    useEffect(()=>{
        getOnePost();
    },[]);
    return (
        <div>
          {loading && < Loader />}
          {post &&  
            <div key={`${post.id}`}>
             <h4>{post.제목}</h4>
               <h3>{post.내용}</h3>
            </div>
          }
        </div>
    );
}
