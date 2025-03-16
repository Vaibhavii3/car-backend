const Booking = require('../models/Booking');

// Place a New Booking
exports.placeBooking = async (req, res) => {
    try {
        const { packageId, pickupAddress, pickupDate, pickupTime } = req.body;

        const booking = new Booking({
            userId: req.user.id,
            packageId,
            pickupAddress,
            pickupDate,
            pickupTime,
            status: "Scheduled"
        });

        await booking.save();
        res.json({ message: 'Booking confirmed', booking });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Upcoming Bookings
exports.getUpcomingBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.user.id, status: { $ne: 'Completed' } });
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Past Bookings
exports.getPastBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.user.id, status: 'Completed' });
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.cancelBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.bookingId);
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }
        booking.status = "cancelled";
        await booking.save();
        res.json({ message: "Booking cancelled successfully", booking });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllBookings = async (req, res) => {
    try {
        let query = {};
        if (req.user.role !== "admin") {
            query.user = req.user.id; 
        }

        const bookings = await Booking.find(query)
          .populate("user", "name email")
          .populate("service", "name");

        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
