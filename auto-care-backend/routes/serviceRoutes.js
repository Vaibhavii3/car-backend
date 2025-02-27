import express from "express";
import {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
} from "../controllers/serviceController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

// Public routes
router.get("/", getAllServices);
router.get("/:id", getServiceById);

// Protected admin routes
router.post("/", authMiddleware, roleMiddleware("admin"), createService);
router.put("/:id", authMiddleware, roleMiddleware("admin"), updateService);
router.delete("/:id", authMiddleware, roleMiddleware("admin"), deleteService);

export default router;
