import express from "express";
import dotenv from "dotenv";
// import connectDB from "./src/config/db.js";
import mongoose from "mongoose";
import connectDb from "./src/config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
