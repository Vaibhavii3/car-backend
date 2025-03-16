const express = require('express');
const { trackOrder, updateOrderStatus, getOngoingOrders, placeOrder, getPastOrders } = require('../controllers/orderTrackingController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Order Tracking Routes
router.get('/track/:orderId', authMiddleware, trackOrder);
router.put('/update/:orderId', authMiddleware, updateOrderStatus); // Admin Use
router.get('/ongoing', authMiddleware, getOngoingOrders);
router.post('/place', authMiddleware, placeOrder);
router.get('/past', authMiddleware, getPastOrders);

module.exports = router;
