const mongoose = require("mongoose");

const PackageSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    image: { type: String, default: "" },
    service: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
}, { timestamps: true });

module.exports = mongoose.model("Package", PackageSchema);
