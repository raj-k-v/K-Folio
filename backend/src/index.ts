import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/db";
import authRouter from "./routes/auth";
import postRouter from "./routes/post";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Backend Server is running",
    success: true,
  });
});

// routes
app.use("/auth", authRouter);
app.use("/posts", postRouter);

const PORT = process.env.PORT || 3000;

// connect DB & start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
