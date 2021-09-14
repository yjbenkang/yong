import express from "express";
import { watch,getUpload,postUpload } from "../controllers/postController";

const postRouter = express.Router();


postRouter.get("/:id", watch);
postRouter.route("/upload").post(postUpload);


export default postRouter;