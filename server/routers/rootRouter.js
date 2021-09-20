import express from "express";
import { getJoin, postJoin, postLogin } from "../controllers/userController";
import { home } from "../controllers/postController";
import { publicOnlyMiddleware} from "../middlewares";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").all(publicOnlyMiddleware).get(getJoin).post(postJoin);
rootRouter.post("/login", publicOnlyMiddleware, postLogin);

export default rootRouter;
