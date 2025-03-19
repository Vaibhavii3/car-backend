import express from "express";
import { 
  addReview, 
  getServiceReviews, 
  getUserReviews, 
  deleteReview 
} from "../controllers/reviewController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Customer Review Routes
router.post("/add", authMiddleware, addReview);
router.get("/service/:serviceId", getServiceReviews);
router.get("/user/:userId", authMiddleware, getUserReviews);
router.delete("/delete/:reviewId", authMiddleware, deleteReview);

export default router;
