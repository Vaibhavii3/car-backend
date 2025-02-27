import Booking from "../models/Booking.js";
import Service from "../models/Service.js";

// Create a new booking
export const createBooking = async (req, res) => {
  try {
    const { serviceId, carModel, preferredDate, address } = req.body;

    // Check if service exists
    const service = await Service.findById(serviceId);
    if (!service) return res.status(404).json({ message: "Service not found" });

    const booking = new Booking({
      user: req.user.id,
      service: service._id,
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
    const bookings = await Booking.find({ user: req.user.id })
      .populate("service", "name price")
      .sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single booking (e.g., for confirmation page)
export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate("service");
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
