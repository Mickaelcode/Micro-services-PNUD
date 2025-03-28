const {Router} = require("express");
const vehicleRoute =Router();
const VehicleController = require("../controllers/VehicleController");

vehicleRoute.post("/", VehicleController.createVehicle);
vehicleRoute.get("/", VehicleController.getAllVehicles);
vehicleRoute.get("/:id", VehicleController.getVehicleById);
vehicleRoute.put("/:id", VehicleController.updateVehicle);
vehicleRoute.delete("/:id", VehicleController.deleteVehicle);

module.exports = vehicleRoute;
