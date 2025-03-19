import express from "express";
import { placeBooking, getUpcomingBookings, getPastBookings, cancelBooking } from "../controllers/bookingController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Booking Routes
router.post("/book", authMiddleware, placeBooking);
router.get("/upcoming", authMiddleware, getUpcomingBookings);
router.get("/past", authMiddleware, getPastBookings);
router.put("/cancel/:bookingId", authMiddleware, cancelBooking);

export default router;
