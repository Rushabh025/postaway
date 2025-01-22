import dotenv from "dotenv";
dotenv.config();
import express from "express";
import userRoutes from "./features/users/user.routes.js";

const app = express();

app.use('/api', userRoutes);

export default app;