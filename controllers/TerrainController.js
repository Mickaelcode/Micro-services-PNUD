const Terrain = require("../models/Terrain");
const Possession = require("../models/Possession");

// Créer un nouveau terrain
exports.createTerrain = async (req, res) => {
  try {
    const { possession_id, localisation, area, cadastre } = req.body;

    // Vérifier si la possession existe
    const possession = await Possession.findByPk(possession_id);
    if (!possession) {
      return res.status(404).json({ message: "Possession not found" });
    }

    const terrain = await Terrain.create({
      possession_id,
      localisation,
      area,
      cadastre,
    });

    res.status(201).json(terrain);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer tous les terrains
exports.getAllTerrains = async (req, res) => {
  try {
    const terrains = await Terrain.findAll({
      include: [{ model: Possession, attributes: ["name"] }],
    });
    res.status(200).json(terrains);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer un terrain par son ID
exports.getTerrainById = async (req, res) => {
  try {
    const { id } = req.params;
    const terrain = await Terrain.findByPk(id, {
      include: [{ model: Possession, attributes: ["name"] }],
    });

    if (!terrain) {
      return res.status(404).json({ message: "Terrain not found" });
    }

    res.status(200).json(terrain);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un terrain
exports.updateTerrain = async (req, res) => {
  try {
    const { id } = req.params;
    const { possession_id, localisation, area, cadastre } = req.body;

    const terrain = await Terrain.findByPk(id);
    if (!terrain) {
      return res.status(404).json({ message: "Terrain not found" });
    }

    // Vérifier si la possession existe
    if (possession_id) {
      const possession = await Possession.findByPk(possession_id);
      if (!possession) {
        return res.status(404).json({ message: "Possession not found" });
      }
    }

    await terrain.update({
      possession_id,
      localisation,
      area,
      cadastre,
    });

    res.status(200).json(terrain);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un terrain
exports.deleteTerrain = async (req, res) => {
  try {
    const { id } = req.params;
    const terrain = await Terrain.findByPk(id);

    if (!terrain) {
      return res.status(404).json({ message: "Terrain not found" });
    }

    await terrain.destroy();
    res.status(204).json({ message: "Terrain deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
