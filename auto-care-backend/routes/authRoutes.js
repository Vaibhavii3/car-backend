import express from "express";
import { register, login, verifyUser } from "../controllers/authController.js";
import authMiddleware  from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/verify", authMiddleware, verifyUser);
router.get("/admin", authMiddleware, roleMiddleware("admin"), (req, res) => {
  res.json({ message: "Welcome, Admin!" });
});

export default router;
