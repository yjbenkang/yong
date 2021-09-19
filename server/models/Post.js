import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    제목: String,
    내용: String,
    createdAt: Date,
    meta: {
        views: Number
    },
});

const Post = mongoose.model("Post", postSchema);
export default Post;