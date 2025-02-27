import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        phone: { type: String, unique: true },
        address: { type: String },
        role: { type: String, enum: ["user", "admin", "service-provider"], default: "user" },
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema);
