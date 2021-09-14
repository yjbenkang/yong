import express from "express";
import morgan from "morgan";

const app = express();
const logger = morgan("dev");

const handleHome = (req, res) => {
   return res.send("Hi !");
}

app.use(logger);
app.get("/", handleHome);

const PORT = process.env.PORT || 4000;

const handleListening = () =>
    console.log(`🚀 Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
