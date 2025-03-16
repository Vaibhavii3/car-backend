import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, default: "General" },
    image: { type: String },                   // URL to an image of the service
    rating: { type: Number, default: 0 },        // Default rating
    reviews: { type: Number, default: 0 },       // Number of reviews
  },
  { timestamps: true }
);

export default mongoose.model("Service", serviceSchema);
