const express = require("express");
const {
    getAllPackages,
    getPackageById,
    createPackage,
    updatePackage,
    deletePackage,
} = require("../controllers/packageController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware"); // Ensure only admins can modify packages

const router = express.Router();

// Public Routes
router.get("/", getAllPackages);
router.get("/:packageId", getPackageById);

// Admin Routes
router.post("/", authMiddleware, adminMiddleware, createPackage);
router.put("/:packageId", authMiddleware, adminMiddleware, updatePackage);
router.delete("/:packageId", authMiddleware, adminMiddleware, deletePackage);

module.exports = router;
