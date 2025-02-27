import Review from "../models/Review.js";
import Booking from "../models/Booking.js";

// Create a new review
export const createReview = async (req, res) => {
  try {
    const { bookingId, rating, comment } = req.body;
    const booking = await Booking.findById(bookingId);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    if (booking.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "You can only review your own booking" });
    }

    // Check if user already reviewed
    const existingReview = await Review.findOne({ booking: bookingId, user: req.user.id });
    if (existingReview) {
      return res.status(400).json({ message: "You already submitted a review for this booking" });
    }

    const review = new Review({
      user: req.user.id,
      booking: bookingId,
      rating,
      comment,
    });
    await review.save();

    res.status(201).json({ message: "Review submitted", review });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get reviews for a booking or for a user
export const getReviews = async (req, res) => {
  try {
    // You can add query parameters, e.g. /api/reviews?bookingId=...
    const { bookingId, userId } = req.query;

    let filter = {};
    if (bookingId) filter.booking = bookingId;
    if (userId) filter.user = userId;

    const reviews = await Review.find(filter)
      .populate("user", "name")
      .populate("booking", "service status");
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
