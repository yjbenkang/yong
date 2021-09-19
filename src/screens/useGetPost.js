import Axios from "axios";
import { useState } from "react";

export const useGetPost = (id) => {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState();

    const getOnePost = async () => {
        try {
            const {data :post} = await Axios.get(`http://localhost:4000/posts/${id}`);
            setPost(post);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }

    };

    return [loading, post, {getOnePost}];
}