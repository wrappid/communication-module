const express = require("express");

const communicationController = require("../controllers/communication.controller");



const communicationRouter = express.Router();

communicationRouter.post("/communication/template/:name/test", communicationController.sendTemplates);


module.exports = communicationRouter;