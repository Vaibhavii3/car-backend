const Vehicle = require('../models/Vehicle');

// Add Vehicle
exports.addVehicle = async (req, res) => {
    try {
        const { brand, model, licensePlate, fuelType } = req.body;

        const vehicle = new Vehicle({
            userId: req.user.id,
            brand,
            model,
            licensePlate,
            fuelType
        });

        await vehicle.save();
        res.json({ message: 'Vehicle added successfully', vehicle });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get User Vehicles
exports.getUserVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find({ userId: req.user.id });
        res.json(vehicles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Vehicle
exports.deleteVehicle = async (req, res) => {
    try {
        await Vehicle.findByIdAndDelete(req.params.vehicleId);
        res.json({ message: 'Vehicle deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
