import React, { useState, useEffect } from "react";
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
            <div key={`${post.id}`}>
             <h4>{post.제목}</h4>
               <h3>{post.내용}</h3>
            </div>
          )}
        </div>
    );
}

export default Home;