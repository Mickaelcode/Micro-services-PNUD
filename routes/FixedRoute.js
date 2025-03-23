const Fixed = require("../models/Fixed");
const Possession = require("../models/Possession");

// Créer un nouveau bien fixe
exports.createFixed = async (req, res) => {
  try {
    const { possession_id, name, description, localisation } = req.body;

    // Vérifier si la possession existe
    const possession = await Possession.findByPk(possession_id);
    if (!possession) {
      return res.status(404).json({ message: "Possession not found" });
    }

    const fixed = await Fixed.create({
      possession_id,
      name,
      description,
      localisation,
    });

    res.status(201).json(fixed);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer tous les biens fixes
exports.getAllFixed = async (req, res) => {
  try {
    const fixed = await Fixed.findAll({
      include: [{ model: Possession, attributes: ["name"] }],
    });
    res.status(200).json(fixed);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer un bien fixe par son ID
exports.getFixedById = async (req, res) => {
  try {
    const { id } = req.params;
    const fixed = await Fixed.findByPk(id, {
      include: [{ model: Possession, attributes: ["name"] }],
    });

    if (!fixed) {
      return res.status(404).json({ message: "Fixed asset not found" });
    }

    res.status(200).json(fixed);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un bien fixe
exports.updateFixed = async (req, res) => {
  try {
    const { id } = req.params;
    const { possession_id, name, description, localisation } = req.body;

    const fixed = await Fixed.findByPk(id);
    if (!fixed) {
      return res.status(404).json({ message: "Fixed asset not found" });
    }

    // Vérifier si la possession existe
    if (possession_id) {
      const possession = await Possession.findByPk(possession_id);
      if (!possession) {
        return res.status(404).json({ message: "Possession not found" });
      }
    }

    await fixed.update({
      possession_id,
      name,
      description,
      localisation,
    });

    res.status(200).json(fixed);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un bien fixe
exports.deleteFixed = async (req, res) => {
  try {
    const { id } = req.params;
    const fixed = await Fixed.findByPk(id);

    if (!fixed) {
      return res.status(404).json({ message: "Fixed asset not found" });
    }

    await fixed.destroy();
    res.status(204).json({ message: "Fixed asset deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
