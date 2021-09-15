import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000"
});

const getPosts = () => api.get("/");
const getPost = id => api.get(`/posts/${id}`);

export default {
    getPosts,
    getPost
};