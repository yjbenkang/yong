import express from "express";
import morgan from "morgan";
import cors from "cors";
import rootRouter from "./routers/rootRouter";
import postRouter from "./routers/postRouter";
import userRouter from "./routers/userRouter";

const app = express();
const logger = morgan("dev");

app.use(logger);
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());//이걸 추가하지 않으면 POST 수행 시 req.body를 가져올 수 없다.


app.use("/", rootRouter);
app.use("/posts", postRouter);
// app.use("/users", userRouter);

const PORT = process.env.PORT || 4000;

const handleListening = () =>
    console.log(`🚀 Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
