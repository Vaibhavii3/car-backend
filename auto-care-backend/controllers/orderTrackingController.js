const Order = require('../models/OrderTracking.js');

// Place Order
exports.placeOrder = async (req, res) => {
    try {
        const { packageId, pickupAddress, pickupDate, pickupTime, paymentStatus } = req.body;

        // Validation
        if (!packageId || !pickupAddress || !pickupDate || !pickupTime) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const order = new Order({
            userId: req.user.id,
            packageId,
            pickupAddress,
            pickupDate,
            pickupTime,
            paymentStatus
        });

        await order.save();
        res.json({ message: 'Order placed successfully', order });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Order Status (Admin)
exports.updateOrderStatus = async (req, res) => {
    try {
        if (req.user.role !== "admin") {
            return res.status(403).json({ message: "Unauthorized action." });
        }

        const { status } = req.body;
        const order = await Order.findById(req.params.orderId);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        order.status = status;
        await order.save();
        res.json({ message: "Order status updated", order });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Get Ongoing Orders
exports.getOngoingOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.user.id, status: { $ne: 'Completed' } });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Past Orders
exports.getPastOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.user.id, status: 'Completed' });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.trackOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.orderId).populate("user", "name email").populate("package", "name");
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
