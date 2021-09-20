import express from "express";
import { logout, postChangePassword, postEdit, remove, see } from "../controllers/userController";
import { protectorMiddleware } from "../middlewares";

const userRouter = express.Router();

userRouter.post("/edit", protectorMiddleware, postEdit);
userRouter.post("/change-password", protectorMiddleware, postChangePassword);
userRouter.post("/remove", remove);
userRouter.post("/logout", protectorMiddleware, logout);
userRouter.get("/:id", see)

export default userRouter;