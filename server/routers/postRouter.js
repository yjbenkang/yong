import express from "express";
import { watch } from "../controllers/postController";

const postRouter = express.Router();


postRouter.get("/:id", watch);

export default postRouter;