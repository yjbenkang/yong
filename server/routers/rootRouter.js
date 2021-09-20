import express from "express";
import { getJoin, getLogin, postJoin, postLogin } from "../controllers/userController";
import { home } from "../controllers/postController";
import { publicOnlyMiddleware} from "../middlewares";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/login").all(publicOnlyMiddleware).get(getLogin).post(postLogin);
rootRouter.route("/join").all(publicOnlyMiddleware).get(getJoin).post(postJoin);

export default rootRouter;
