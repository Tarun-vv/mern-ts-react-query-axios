import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

import mongoose from "mongoose";
import app from "./app";

mongoose
  .connect(process.env.DATABASE as string)
  .then(() => console.log("DATABASE successfully connected"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
