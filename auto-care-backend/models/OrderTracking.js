const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  packageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Package' },
  status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' },
  pickupAddress: String,
  pickupDate: Date,
  pickupTime: String,
  paymentStatus: { type: String, enum: ['Paid', 'Failed'], default: 'Paid' }
});

module.exports = mongoose.model('Order', OrderSchema);
