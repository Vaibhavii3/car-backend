const express = require('express');
const { placeBooking, getUpcomingBookings, getPastBookings, cancelBooking } = require('../controllers/bookingController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Booking Routes
router.post('/book', authMiddleware, placeBooking);
router.get('/upcoming', authMiddleware, getUpcomingBookings);
router.get('/past', authMiddleware, getPastBookings);
router.put('/cancel/:bookingId', authMiddleware, cancelBooking);

module.exports = router;
