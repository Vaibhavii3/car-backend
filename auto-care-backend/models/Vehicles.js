const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    brand: String,
    model: String,
    licensePlate: String,
    fuelType: String
});

module.exports = mongoose.model('Vehicle', VehicleSchema);
