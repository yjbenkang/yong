import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";
import { useLogout } from "./useLogout";
import styled from "styled-components";

const Info = styled.div`
  margin-bottom: 25px;
`;

const Description = styled.div`
  font-size: 15px;
  margin: 10px 0px;
`;

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState();
    async function getHome() {
        try {
            const {data : posts} = await axios.get("http://localhost:4000/");
            setPosts(posts);
        } catch (err) {
            console.log(err.response);
        } finally {
            setLoading(false);
        }
    }
    useEffect(()=> {
        getHome();
    }, []);
    return (
        <div>
          {loading && < Loader />}
          {posts && posts.map((post) => 
            <Info key={`${post._id}`}>
             <Link to={`posts/${post._id}`}>{post.제목}</Link>
               <Description>{post.내용}</Description>
            </Info>
          )}
        </div>
    );
}

export default Home;