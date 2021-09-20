import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Axios from "axios";
import { useLogout } from "./useLogout";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState();
    const [status,{logout}] = useLogout();
    async function getHome() {
        try {
            const {data : posts} = await Axios.get("http://localhost:4000/");
            setPosts(posts);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }
    useEffect(()=> {
        getHome();
    }, []);
    return (
        <div>
          <Link to={`/login`}>로그인</Link>
          <Link to={`/join`}>회원가입</Link>
          <Link to={`posts/upload`}>게시물 등록하기 &rarr;</Link>
          <form onSubmit={logout}>
            <input type="submit" value="로그아웃" />
          </form>
          {loading && < Loader />}
          {posts && posts.map((post) => 
            <div key={`${post._id}`}>
             <Link to={`posts/${post._id}`}>{post.제목}</Link>
               <h3>{post.내용}</h3>
            </div>
          )}
        </div>
    );
}

export default Home;