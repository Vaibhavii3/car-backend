import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  booking: { type: mongoose.Schema.Types.ObjectId, ref: "Booking", required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String },
}, { timestamps: true });

export default mongoose.model("Review", reviewSchema);
