const Batiment = require("../models/Batiment");
const Possession = require("../models/Possession");

// Créer un nouveau bâtiment
exports.createBatiment = async (req, res) => {
  try {
    const {
      possession_id,
      lot,
      localisation,
      land_title,
      hold,
      usage,
      reference,
    } = req.body;

    // Vérifier si la possession existe
    const possession = await Possession.findByPk(possession_id);
    if (!possession) {
      return res.status(404).json({ message: "Possession not found" });
    }

    const batiment = await Batiment.create({
      possession_id,
      lot,
      localisation,
      land_title,
      hold,
      usage,
      reference,
    });

    res.status(201).json(batiment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer tous les bâtiments
exports.getAllBatiments = async (req, res) => {
  try {
    const batiments = await Batiment.findAll({
      include: [{ model: Possession, attributes: ["name"] }],
    });
    res.status(200).json(batiments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer un bâtiment par son ID
exports.getBatimentById = async (req, res) => {
  try {
    const { id } = req.params;
    const batiment = await Batiment.findByPk(id, {
      include: [{ model: Possession, attributes: ["name"] }],
    });

    if (!batiment) {
      return res.status(404).json({ message: "Batiment not found" });
    }

    res.status(200).json(batiment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un bâtiment
exports.updateBatiment = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      possession_id,
      lot,
      localisation,
      land_title,
      hold,
      usage,
      reference,
    } = req.body;

    const batiment = await Batiment.findByPk(id);
    if (!batiment) {
      return res.status(404).json({ message: "Batiment not found" });
    }

    // Vérifier si la possession existe
    if (possession_id) {
      const possession = await Possession.findByPk(possession_id);
      if (!possession) {
        return res.status(404).json({ message: "Possession not found" });
      }
    }

    await batiment.update({
      possession_id,
      lot,
      localisation,
      land_title,
      hold,
      usage,
      reference,
    });

    res.status(200).json(batiment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un bâtiment
exports.deleteBatiment = async (req, res) => {
  try {
    const { id } = req.params;
    const batiment = await Batiment.findByPk(id);

    if (!batiment) {
      return res.status(404).json({ message: "Batiment not found" });
    }

    await batiment.destroy();
    res.status(204).json({ message: "Batiment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
