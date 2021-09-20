import express from "express";
import { logout, postEdit, remove, see } from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/edit", postEdit);
userRouter.get("/remove", remove);
userRouter.post("/logout", logout);
userRouter.get("/:id", see)
export default userRouter;