import express from "express";
import { getJoin, postJoin, postLogin } from "../controllers/userController";
import { home } from "../controllers/postController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.post("/login", postLogin);

export default rootRouter;
