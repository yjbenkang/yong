import express from "express";
import { watch,postUpload, postEdit, deletePost } from "../controllers/postController";

const postRouter = express.Router();


postRouter.get("/:id", watch);
postRouter.route("/:id/edit").put(postEdit);
postRouter.route("/:id/delete").delete(deletePost);
postRouter.route("/upload").post(postUpload);

export default postRouter;