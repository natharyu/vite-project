import express from "express";
import authController from "../controllers/authController.js";

const authRoutes = express.Router();

authRoutes.post("/register", authController.register);
authRoutes.post("/login", authController.login);
authRoutes.get("/logout", authController.logout);

export default authRoutes;
