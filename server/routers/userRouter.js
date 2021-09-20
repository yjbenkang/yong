import express from "express";
import { logout, postChangePassword, postEdit, remove, see } from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/edit", postEdit);
userRouter.post("/change-password",postChangePassword);
userRouter.post("/remove", remove);
userRouter.post("/logout", logout);
userRouter.get("/:id", see)

export default userRouter;