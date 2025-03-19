const express = require("express");
const { getAdminStats, getAllBookings, updateBookingStatus } = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/stats", authMiddleware, roleMiddleware("admin"), getAdminStats);
router.get("/bookings", authMiddleware, getAllBookings);
router.put("/bookings/:id", authMiddleware, updateBookingStatus);

module.exports = router;
