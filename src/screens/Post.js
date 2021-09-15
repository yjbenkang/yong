import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import api from "../api";
import Loader from "../components/Loader";
import { DeletePost } from "./DeletePost";

export default function Post({
    match: {
      params: { id }
    }
  })  {
    const [loading, setLoading] = useState(true);
    const [status,{deletePost}] = DeletePost(id);
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
               <form onSubmit={deletePost}>
               {/* <input onChange={updatePostId} value={readPostId} /> */}
               <input type="submit" value="게시물 삭제" />
                </form>
              {status && <Redirect to="/" />}
              {/* {readStatus && <p>{readStatus}</p>} */}
            </div>
          }
      </div>
    );
}
