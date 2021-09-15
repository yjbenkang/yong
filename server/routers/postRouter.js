import express from "express";
import { watch, deletePost, editPost, uploadPost } from "../controllers/postController";

const postRouter = express.Router();


postRouter.get("/:id", watch);
postRouter.route("/:id/edit").put(editPost);
postRouter.route("/:id/delete").delete(deletePost);
postRouter.route("/upload").post(uploadPost);

export default postRouter;