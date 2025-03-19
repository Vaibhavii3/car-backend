import express from "express";
import { getAdminStats, getAllBookings, updateBookingStatus } from "../controllers/adminController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/stats", authMiddleware, roleMiddleware("admin"), getAdminStats);
router.get("/bookings", authMiddleware, getAllBookings);
router.put("/bookings/:id", authMiddleware, updateBookingStatus);

export default router;
