// db.js
const mongoose = require('mongoose');
require('dotenv').config(); // Load variables from .env

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            // These options are often recommended for Mongoose
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // You may need to add family: 4 if you encounter connection delays
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        // Exit process with failure
        process.exit(1); 
    }
};

module.exports = connectDB;