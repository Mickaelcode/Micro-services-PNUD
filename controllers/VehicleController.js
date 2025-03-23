const Vehicle = require("../models/Vehicle");
const Possession = require("../models/Possession");

// Créer un nouveau véhicule
exports.createVehicle = async (req, res) => {
  try {
    const { possession_id, matricule, mark, model, power } = req.body;

    // Vérifier si la possession existe
    const possession = await Possession.findByPk(possession_id);
    if (!possession) {
      return res.status(404).json({ message: "Possession not found" });
    }

    const vehicle = await Vehicle.create({
      possession_id,
      matricule,
      mark,
      model,
      power,
    });

    res.status(201).json(vehicle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer tous les véhicules
exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll({
      include: [{ model: Possession, attributes: ["name"] }],
    });
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer un véhicule par son ID
exports.getVehicleById = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await Vehicle.findByPk(id, {
      include: [{ model: Possession, attributes: ["name"] }],
    });

    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    res.status(200).json(vehicle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un véhicule
exports.updateVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const { possession_id, matricule, mark, model, power } = req.body;

    const vehicle = await Vehicle.findByPk(id);
    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    // Vérifier si la possession existe
    if (possession_id) {
      const possession = await Possession.findByPk(possession_id);
      if (!possession) {
        return res.status(404).json({ message: "Possession not found" });
      }
    }

    await vehicle.update({
      possession_id,
      matricule,
      mark,
      model,
      power,
    });

    res.status(200).json(vehicle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un véhicule
exports.deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await Vehicle.findByPk(id);

    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    await vehicle.destroy();
    res.status(204).json({ message: "Vehicle deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
