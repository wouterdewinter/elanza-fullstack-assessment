const express = require("express");
const cors = require("cors");
const app = express();
const Request = require("./models").request;

const PORT = process.env.PORT || 8080;

//middlewares
app.use(cors());
app.use(express.json());

//Get all requests
app.get("/requests", async (req, res, next) => {
  try {
    const requests = await Request.findAll();
    res.status(200).send(requests);
  } catch (error) {
    next(error.message);
  }
});

//GET a request by id
//browser localhost:8080/requests/id
app.get("/requests/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const request = await Request.findByPk(id);
    if (!request) {
      res.status(404).send("request not found");
    } else {
      res.send(request);
    }
  } catch (e) {
    next(e);
  }
});

//Create a new request
// http POST :8080/requests careType="medical"
app.post("/requests", async (req, res, next) => {
  const { careType, startDate, endDate, clientName, extraInformation } =
    req.body;
  try {
    if (!careType || !clientName) {
      res.status(400).send("Must provide care type and client name");
    } else {
      const request = await Request.create(req.body);
      res.json(request);
    }
  } catch (e) {
    next(e);
  }
});

//Update a request
//at terminal http PUT :8080/requests/1
app.put("/requests/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const requestToUpdate = await Request.findByPk(id);
    if (!requestToUpdate) {
      res.status(404).send("request not found");
    } else {
      const updatedRequest = await requestToUpdate.update({
        open: !requestToUpdate.open,
      });
      res.json(updatedRequest);
    }
  } catch (e) {
    next(e);
  }
});

app.listen(process.env.PORT || 8080);
console.log(`listen at the port ${PORT}`);
