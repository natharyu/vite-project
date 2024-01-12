import express from "express";
import authRoutes from "./authRoutes.js";
import AdminRoute from "./middlewares/protectedRoute.js";
import appController from "../controllers/appController.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.get("/users", AdminRoute, appController.getUsers);
export default router;
