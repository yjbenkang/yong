import axios from "axios";
import { useState } from "react";

export const useGetPost = (id) => {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState();

    const getOnePost = async () => {
        try {
            const {data :post} = await axios.get(`http://localhost:4000/posts/${id}`);
            setPost(post);
        } catch (err) {
            console.log(err.response);
        } finally {
            setLoading(false);
        }

    };

    return [loading, post, {getOnePost}];
}