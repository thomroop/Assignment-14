const mongoose = require('mongoose');
const User = require('./models/User'); 
const Customer = require('./models/Customer'); 
require('dotenv').config(); 

const users = [
  { name: 'John Doe', email: 'john@example.com', password: 'hashedpassword', role: 'admin' },
  { name: 'Jane Smith', email: 'jane@example.com', password: 'hashedpassword', role: 'user' }
];

const customers = [
  { name: 'Customer One', email: 'customer1@example.com', status: 'Active', customerType: 'Individual' },
  { name: 'Customer Two', email: 'customer2@example.com', status: 'Inactive', customerType: 'Corporate' }
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    
    await User.deleteMany({});
    await Customer.deleteMany({});

    
    await User.insertMany(users);
    await Customer.insertMany(customers);

    console.log('Seed data inserted!');
    process.exit();
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
}

seedDB();
