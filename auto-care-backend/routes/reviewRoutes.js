const express = require('express');
const { addReview, getServiceReviews, getUserReviews, deleteReview } = require('../controllers/reviewController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Customer Review Routes
router.post('/add', authMiddleware, addReview);
router.get('/service/:serviceId', getServiceReviews);
router.get('/user/:userId', authMiddleware, getUserReviews);
router.delete('/delete/:reviewId', authMiddleware, deleteReview);

module.exports = router;
