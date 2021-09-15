import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000"
});

const getPosts = () => api.get("/");
const getPost = id => api.get(`/posts/${id}`);
const editPost = id => api.put(`/posts/${id}/edit`);
const uploadPost = id => api.post(`/posts/${id}/upload`);

export default {
    getPosts,
    getPost,
    editPost,
    uploadPost,
};