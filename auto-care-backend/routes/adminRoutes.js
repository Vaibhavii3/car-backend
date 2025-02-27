import express from "express";
import { getAllBookings, updateBookingStatus } from "../controllers/adminController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/bookings", authMiddleware, getAllBookings);
router.put("/bookings/:id", authMiddleware, updateBookingStatus);

export default router;
