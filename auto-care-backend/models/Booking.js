import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  service: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
  carModel: { type: String, required: true },
  preferredDate: { type: Date, required: true },
  status: {
    type: String,
    enum: ["pending", "confirmed", "driver_en_route", "in_progress", "completed"],
    default: "pending",
  },
  address: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);
