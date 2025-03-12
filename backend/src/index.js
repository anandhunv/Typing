import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import path from "path";

import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();


// Increase request size limits
app.use(express.json({ limit: "10mb" })); // Set max JSON payload size
app.use(express.urlencoded({ extended: true, limit: "10mb" })); // Set max URL-encoded payload size

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}


// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
