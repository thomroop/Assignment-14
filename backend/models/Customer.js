const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  company: { type: String },
  customerType: { type: String, enum: ['Individual', 'Corporate', 'Premium', 'Regular'], default: 'Individual' },
  status: { type: String, enum: ['Active', 'Inactive', 'Blocked'], default: 'Active' },
  notes: { type: String },
}, { timestamps: true }); 
module.exports = mongoose.model('Customer', customerSchema);
