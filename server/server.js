// server.js
const express = require('express');
const connectDB = require('./db');
require('dotenv').config(); 
const app = express();

// --- 1. Connect to Database ---
connectDB(); 

// --- 2. Middleware ---
// Allows Express to parse JSON data sent in request bodies
app.use(express.json()); 

// Optional: For handling cross-origin requests (if frontend and backend are on different ports)
// const cors = require('cors'); 
// app.use(cors());

// --- 3. Define a Simple Test Route (API Endpoint) ---
app.get('/api/status', (req, res) => {
    res.json({ message: 'Backend is running and connected!' });
});

// --- 4. Start the Server ---
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in development mode on port ${PORT}`);
});