import express from "express";
import { createBooking, getUserBookings } from "../controllers/bookingController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createBooking);
router.get("/", authMiddleware, getUserBookings);

export default router;
