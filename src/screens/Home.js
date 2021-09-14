import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { getPosts } from "../api";

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState();
    async function getHome() {
        try {
            const {data : posts} = await getPosts();
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
    return loading? (
      <Loader/>
    ) : (
        posts.map(post=> <div key={post.id}>{post.제목}{post.내용}</div>)
    );
}