const express = require("express");
const fixedRoute = express.fixedRoute();
const FixedController = require("../controllers/FixedController");

fixedRoute.post("/fixed", FixedController.createFixed);
fixedRoute.get("/fixed", FixedController.getAllFixed);
fixedRoute.get("/fixed/:id", FixedController.getFixedById);
fixedRoute.put("/fixed/:id", FixedController.updateFixed);
fixedRoute.delete("/fixed/:id", FixedController.deleteFixed);

module.exports = fixedRoute;