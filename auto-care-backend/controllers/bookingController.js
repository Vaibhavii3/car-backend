import Booking from "../models/Booking.js";

// Create a new booking
export const createBooking = async (req, res) => {
    try {
        const { serviceType, carModel, preferredDate, address } = req.body;

        const booking = new Booking({
            user: req.user.id,
            serviceType,
            carModel,
            preferredDate,
            address,
        });

        await booking.save();
        res.status(201).json({ message: "Booking created successfully", booking });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get user bookings
export const getUserBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
