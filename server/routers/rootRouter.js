import express from "express";
import { getJoin, postJoin, login } from "../controllers/userController";
import { home } from "../controllers/postController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/login", login);

export default rootRouter;
