import Service from "../models/Service.js";

// Get all services
export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single service
export const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ message: "Service not found" });
    res.json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new service (Admin only)
export const createService = async (req, res) => {
  try {
    const { name, description, price, category, provider, image } = req.body;
    
    // Create the service with additional fields
    const service = new Service({
      name,
      description,
      price,
      category,
      provider,
      image,
      // Optionally, set defaults for rating and reviews
      rating: req.body.rating || 0,
      reviews: req.body.reviews || 0,
    });
    
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update service (Admin only)
export const updateService = async (req, res) => {
  try {
    const { name, description, price, category, provider, image } = req.body;
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ message: "Service not found" });
    
    // Update fields if provided
    service.name = name ?? service.name;
    service.description = description ?? service.description;
    service.price = price ?? service.price;
    service.category = category ?? service.category;
    service.provider = provider ?? service.provider;
    service.image = image ?? service.image;
    
    // Update rating and reviews if provided
    if (req.body.rating !== undefined) service.rating = req.body.rating;
    if (req.body.reviews !== undefined) service.reviews = req.body.reviews;
    
    await service.save();
    res.json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete service (Admin only)
export const deleteService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ message: "Service not found" });
    
    await service.remove();
    res.json({ message: "Service deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
