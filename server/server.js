import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import postRouter from "./routers/postRouter";
import userRouter from "./routers/userRouter";

const app = express();
const logger = morgan("dev");

app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use("/", rootRouter);
app.use("/posts", postRouter);
// app.use("/users", userRouter);

const PORT = process.env.PORT || 4000;

const handleListening = () =>
    console.log(`🚀 Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
