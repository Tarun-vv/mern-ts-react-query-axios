import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors({ origin: "http://localhost:5173" }));

import blogRouter from "./routes/blogRouter";
app.use("/api/v1/blogs", blogRouter);

export default app;
