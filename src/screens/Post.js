import React, { useState, useEffect } from "react";
import { Redirect,Route } from "react-router-dom";
import Axios from "axios";
import Loader from "../components/Loader";
import { useDeletePost } from "./useDeletePost";
import { EditPost } from "./EditPost";
import { useGetPost } from "./useGetPost";

export default function Post({
    match: {
      params: { id }
    }
  })  {
    const [loading, post, {getOnePost}] = useGetPost(id);
    const [status,{deletePost}] = useDeletePost(id);
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
            <input type="submit" value="게시물 삭제" />
            </form>
            {status && <Redirect to="/" />}
          </div>
        }
      </div>
    );
}
