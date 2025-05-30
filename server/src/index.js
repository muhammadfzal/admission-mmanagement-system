// require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const formRoutes = require('./routes/formRoutes');

connectDB();
const app = express();
app.use(cors());
app.use(express.json()); 

// mount auth routes
 app.use('/api/auth', authRoutes); 
 app.use('/api/form', formRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));