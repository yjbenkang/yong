import React, { useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import Loader from "../components/Loader";
import { useDeletePost } from "./useDeletePost";
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
          <div key={`${post._id}`}>
            <Link to="/">홈으로 &rarr;</Link>
            <h4>{post.제목}</h4>
            <h3>{post.내용}</h3>
            <form onSubmit={deletePost}>
            <input type="submit" value="게시물 삭제" />
            </form>
            <Link to={`${post._id}/edit`}>게시물 수정하기 &rarr;</Link>
            {status && <Redirect to="/" />}
          </div>
        }
      </div>
    );
}
