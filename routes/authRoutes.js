import express from "express";
import authController from "../controllers/authController.js";
import AdminRoute from "./middlewares/protectedRoute.js";

const authRoutes = express.Router();

authRoutes.post("/register", authController.register);
authRoutes.post("/login", authController.login);
authRoutes.get("/logout", authController.logout);
authRoutes.get("/users", AdminRoute, authController.getUsers);
authRoutes.get("/checkAuth", authController.checkAuth);

export default authRoutes;
