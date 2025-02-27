import express from "express";
import {
  createBooking,
  getUserBookings,
  getBookingById,
} from "../controllers/bookingController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected routes
router.post("/", authMiddleware, createBooking);
router.get("/", authMiddleware, getUserBookings);
router.get("/:id", authMiddleware, getBookingById);

export default router;
