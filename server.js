const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const commonRouter = require("./routes/commonRoutes");
const connectToMongo = require("./db/db");

// Initialize Express app
const app = express();

// Connect to MongoDB
connectToMongo();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use(commonRouter);

// Default route
app.get('/', (req, res) => {
    res.send('Planner API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
