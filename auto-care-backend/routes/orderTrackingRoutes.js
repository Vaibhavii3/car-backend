import express from "express";
import { trackOrder, updateOrderStatus, getOngoingOrders, placeOrder, getPastOrders } from "../controllers/orderTrackingController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Order Tracking Routes
router.get("/track/:orderId", authMiddleware, trackOrder);
router.put("/update/:orderId", authMiddleware, updateOrderStatus); // Admin Use
router.get("/ongoing", authMiddleware, getOngoingOrders);
router.post("/place", authMiddleware, placeOrder);
router.get("/past", authMiddleware, getPastOrders);

export default router;
