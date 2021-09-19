import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    제목: String,
    내용: String,
    createdAt: Date,
    meta: {
        views: Number
    },
    owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
});

const Post = mongoose.model("Post", postSchema);
export default Post;