const express = require('express');
const app = express();
const port = 3003;
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const logger = require('./middleware');
const routes = require('./routes');

// Use the logger middleware
app.use(logger);

// Connect to MongoDB Atlas
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Enable CORS for frontend
app.use(cors({
  origin: 'http://localhost:5173'
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.use('/api', routes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});