import * as express from "express";
import apiRouter from "./api";

const app = express();

app.use('/api', apiRouter);

app.get("/", (req, res) => {
    res.send("Hello World");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});
