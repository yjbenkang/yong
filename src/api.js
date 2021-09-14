import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000"
});

export const getPosts = () => api.get("/");
export const postPost = () => api.post("/");

