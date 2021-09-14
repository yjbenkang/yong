import express from "express";
import { watch,getUpload,postUpload, postEdit, getEdit, deletePost } from "../controllers/postController";

const postRouter = express.Router();


postRouter.get("/:id", watch);
postRouter.route("/:id/edit").get(getEdit).put(postEdit);
postRouter.route("/:id/delete").delete(deletePost);
postRouter.route("/upload").get(getUpload).post(postUpload);

export default postRouter;