const mongoose = require('mongoose');
require('dotenv').config();  //  .env is a secret file where we store sensitive info like passwords, database URLs, API keys.
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);    //process.env.MONGO_URI : gets the database URL from the .env file.
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message); 
    process.exit(1);
  }
};

module.exports = connectDB;
