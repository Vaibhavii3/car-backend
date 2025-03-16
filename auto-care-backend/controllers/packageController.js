const Package = require("../models/Package");

// Get All Packages
exports.getAllPackages = async (req, res) => {
    try {
        const packages = await Package.find();
        res.json(packages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Package by ID
exports.getPackageById = async (req, res) => {
    try {
        const packageData = await Package.findById(req.params.packageId);
        if (!packageData) {
            return res.status(404).json({ message: "Package not found" });
        }
        res.json(packageData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a New Package (Admin Only)
exports.createPackage = async (req, res) => {
    try {
        const { name, description, price, image, serviceId } = req.body;

        const newPackage = new Package({
            name,
            description,
            price,
            image,
            service: serviceId,
        });

        await newPackage.save();
        res.status(201).json({ message: "Package created successfully", package: newPackage });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an Existing Package (Admin Only)
exports.updatePackage = async (req, res) => {
    try {
        const { name, description, price, image, serviceId } = req.body;
        const updatedPackage = await Package.findByIdAndUpdate(
            req.params.packageId,
            { name, description, price, image, service: serviceId },
            { new: true } // Returns updated package
        );

        if (!updatedPackage) {
            return res.status(404).json({ message: "Package not found" });
        }

        res.json({ message: "Package updated successfully", package: updatedPackage });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a Package (Admin Only)
exports.deletePackage = async (req, res) => {
    try {
        const deletedPackage = await Package.findByIdAndDelete(req.params.packageId);

        if (!deletedPackage) {
            return res.status(404).json({ message: "Package not found" });
        }

        res.json({ message: "Package deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
