import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const logger = morgan("dev");

app.use(cors());
app.use(logger);
app.use(bodyParser.json());
app.get('/', (req, res)=> res.json({name:'yjbenkang'}));

const PORT = process.env.PORT || 4000;

const handleListening = () =>
    console.log(`🚀 Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
