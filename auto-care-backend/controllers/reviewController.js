const Review = require('../models/Review');

// Add a New Review
exports.addReview = async (req, res) => {
    try {
        const { serviceId, rating, comment } = req.body;

        const review = new Review({
            userId: req.user.id,
            serviceId,
            rating,
            comment
        });

        await review.save();
        res.json({ message: 'Review added successfully', review });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All Reviews for a Service
exports.getServiceReviews = async (req, res) => {
    try {
        const reviews = await Review.find({ serviceId: req.params.serviceId }).populate('userId', 'name');
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All Reviews by a Specific User
exports.getUserReviews = async (req, res) => {
    try {
        const reviews = await Review.find({ userId: req.params.userId });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a Review
exports.deleteReview = async (req, res) => {
    try {
        await Review.findByIdAndDelete(req.params.reviewId);
        res.json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
