
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Imageroute = require('./routes/Image.js');

const dotenv = require('dotenv');
dotenv.config();
// ...existing code...

// Configure dotenv to load environment variables

const app = express();
app.use(cors()); // Enable CORS
const corsOptions = {
  origin: ['http://localhost:8000','http://localhost:5000'], // Allowed 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true, // Allow cookies and credentials
};
app.use(cors(corsOptions)); 
// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies



// // Connect to MongoDB
// const uri = process.env.ATLAS_URI; // Ensure the environment variable is named correctly
// if (!uri) {
//   console.error("Error: ATLAS_URI is not defined in the .env file.");
//   process.exit(1);
// }

// try {
//   mongoose.connect(uri);
//   console.log("Database connected successfully");
// } catch (error) {
//   console.error("Database connection failed");
//   console.error(error);
//   process.exit(1); // Exit the process if the database connection fails
// }

// Routes

 // Middleware to load auth routes
app.use('/api/image',Imageroute)
app.get('/', (req, res) => {
  res.send("Welcome to the server");
});


// Start the server
const PORT = process.env.PORT || 5000; // Use PORT from .env or default to 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});