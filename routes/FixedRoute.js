const {Router} = require("express");
const fixedRoute = Router();
const FixedController = require("../controllers/FixedController");

fixedRoute.post("/", FixedController.createFixed);
fixedRoute.get("/", FixedController.getAllFixed);
fixedRoute.get("/:id", FixedController.getFixedById);
fixedRoute.put("/:id", FixedController.updateFixed);
fixedRoute.delete("/:id", FixedController.deleteFixed);

module.exports = fixedRoute;