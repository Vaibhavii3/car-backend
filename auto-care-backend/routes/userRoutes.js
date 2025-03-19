import express from "express";
import { getProfile, updateProfile } from "../controllers/authController.js";
import { getUserVehicles, addVehicle, deleteVehicle } from "../controllers/vehicleController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// User Profile Routes
router.get("/profile", authMiddleware, getProfile);
router.put("/profile", authMiddleware, updateProfile);

// Vehicle Routes
router.get("/vehicles", authMiddleware, getUserVehicles);
router.post("/vehicles", authMiddleware, addVehicle);
router.delete("/vehicles/:vehicleId", authMiddleware, deleteVehicle);

export default router;
