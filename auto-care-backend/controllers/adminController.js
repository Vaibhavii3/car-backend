import Booking from "../models/Booking.js";

// Get all bookings (Admin)
export const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate("user", "name email");
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Booking Status
export const updateBookingStatus = async (req, res) => {
    try {
        const { status } = req.body;

        let booking = await Booking.findById(req.params.id);
        if (!booking) return res.status(404).json({ message: "Booking not found" });

        booking.status = status;
        await booking.save();

        res.json({ message: "Booking status updated", booking });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
