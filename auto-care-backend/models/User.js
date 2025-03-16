import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        phone: { type: String, unique: true },
        address: { type: String },
        vehicles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }]
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema);
