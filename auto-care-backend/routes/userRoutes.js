const express = require('express');
const { getProfile, updateProfile } = require('../controllers/authController');
const { getUserVehicles, addVehicle, deleteVehicle } = require('../controllers/vehicleController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// User Profile Routes
router.get('/profile', authMiddleware, getProfile);
router.put('/profile', authMiddleware, updateProfile);

// Vehicle Routes
router.get('/vehicles', authMiddleware, getUserVehicles);
router.post('/vehicles', authMiddleware, addVehicle);
router.delete('/vehicles/:vehicleId', authMiddleware, deleteVehicle);

module.exports = router;
