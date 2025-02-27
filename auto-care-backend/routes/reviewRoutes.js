import express from "express";
import { createReview, getReviews } from "../controllers/reviewController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create a new review
router.post("/", authMiddleware, createReview);

// Get reviews
router.get("/", getReviews);

export default router;
