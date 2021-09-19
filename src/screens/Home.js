import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Axios from "axios";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState();
    async function getHome() {
        try {
            const {data : posts} = await Axios.get("http://localhost:4000/");
            console.log(posts);
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