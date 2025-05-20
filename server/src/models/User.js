const mongoose = require('mongoose');  // Import mongoose

const UserSchema = new mongoose.Schema({
  name:       { type: String, required: true },
  mobile:    { type: String, required: true, unique: true },
  email:      { type: String, required: true, unique: true },
  password:   { type: String, required: true },
  role:       { type: String, enum: ['user','admin'], default: 'user' },
  createdAt:  { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);  // Create model

module.exports = User;  // Export model
