import User from "../models/User.js";

// Get User Profile
export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if (!user) return res.status(404).json({ message: "User not found" });

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update User Profile
export const updateUserProfile = async (req, res) => {
    try {
        const { name, phone, address } = req.body;

        let user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        user.name = name || user.name;
        user.phone = phone || user.phone;
        user.address = address || user.address;

        await user.save();
        res.json({ message: "Profile updated successfully", user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
