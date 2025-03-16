const Service = require('../models/Service');
const Package = require('../models/Package');

// Get All Services
exports.getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Service by ID
exports.getServiceById = async (req, res) => {
    try {
        const service = await Service.findById(req.params.serviceId);
        res.json(service);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Packages for a Service
exports.getPackagesByService = async (req, res) => {
    try {
        const packages = await Package.find({ serviceId: req.params.serviceId });
        res.json(packages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
