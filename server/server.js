require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 8080;

// Use middleware
app.use(cors());
app.use(express.json());

// Routes

// Start server on specified port
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
