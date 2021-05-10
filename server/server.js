require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const CareRequest = require("./models").careRequest;

const PORT = process.env.PORT || 8080;

// Use middleware
app.use(cors());
app.use(express.json());

// Get all care requests
app.get("/carerequests", async (req, res, next) => {
  try {
    const careRequests = await CareRequest.findAll();
    res.status(200).send(careRequests);
  } catch (error) {
    next(error.message);
  }
});

// Add care request
app.post("/carerequests", async (req, res, next) => {
  try {
    const careRequest = await CareRequest.create(req.body);
    res.status(200).send(careRequest);
  } catch (error) {
    next(error.message);
  }
});

// Update care request
app.patch("/carerequests/:requestId", async (req, res, next) => {
  try {
    const requestId = parseInt(req.params.requestId);
    const careRequest = await CareRequest.findByPk(requestId);

    // Check if request exists
    if (!careRequest) {
      res.status(404).send({ message: "Request not found" });
    }

    const updatedRequest = await careRequest.update(req.body);

    res.status(200).send(updatedRequest);
  } catch (error) {
    next(error.message);
  }
});

// Start server on specified port
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
