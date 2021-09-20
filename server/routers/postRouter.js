import express from "express";
import { watch, deletePost, editPost, uploadPost, getUploadPost, getEditPost } from "../controllers/postController";
import { protectorMiddleware } from "../middlewares";

const postRouter = express.Router();


postRouter.get("/:id([0-9a-f]{24})", watch);
postRouter.route("/:id([0-9a-f]{24})/edit").all(protectorMiddleware).get(getEditPost).put(editPost);
postRouter.route("/:id([0-9a-f]{24})/delete").all(protectorMiddleware).delete(deletePost);
postRouter.route("/upload").all(protectorMiddleware).get(getUploadPost).post(uploadPost);

export default postRouter;