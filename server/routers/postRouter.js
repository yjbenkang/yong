import express from "express";
import { watch, deletePost, editPost, uploadPost, getUploadPost, getEditPost } from "../controllers/postController";

const postRouter = express.Router();


postRouter.get("/:id([0-9a-f]{24})", watch);
postRouter.route("/:id([0-9a-f]{24})/edit").get(getEditPost).put(editPost);
postRouter.route("/:id([0-9a-f]{24})/delete").delete(deletePost);
postRouter.route("/upload").get(getUploadPost).post(uploadPost);

export default postRouter;