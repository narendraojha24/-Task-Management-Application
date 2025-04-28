// src/app.js
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "../Backend/src/routes/userRoutes.js";
import taskRouter from "../Backend/src/routes/taskRoutes.js";


const app = express();
dotenv.config({ path: "./.env" });

// Middlewares
app.use(cors({
    origin: "http://localhost:5173",   // frontend URL (adjust if needed)
    credentials: true
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.use("/api/users", router);   // User routes for registration, login, logout, etc.
app.use("/api/tasks", taskRouter);   // Task routes for task-related CRUD operations

// Error Handling for unsupported routes
app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Server Error", error: err.message });
});

export { app };






