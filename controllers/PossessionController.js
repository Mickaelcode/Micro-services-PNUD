const Possession = require("../models/Possession");

exports.createPossession = async (req, res) => {
  try {
    const { name, contribuable_id } = req.body;
    const possession = await Possession.create({ name, contribuable_id });
    if (!possession) {
      msg = "you have an issues";
      res.status(401).json({ msg });
      return;
    }
    msg = "possession created successfuly";
    res.status(200).json({ msg, possession });
  } catch (error) {
    msg = error.message ?? "Internal server error";
    res.status(500).json({ msg });
  }
};

exports.getAllPossession = async (req, res) => {
  try {
    const possessions = await Possession.findAll();
    msg = possessions
      ? `here is lists of possessions(${possessions.length})`
      : "Empty";
    res.status(200).json({ msg, possessions });
  } catch (error) {
    msg = error.message ?? "Internal server error";
    res.status(500).json({ msg });
  }
};

exports.updatePossession = async (req, res) => {
  try {
    const { id } = req.params;
    const possession = await Possession.findByPk(id);
    if (!possession) {
      msg = "Possion not found";
      res.status(404).json({ msg });
      return;
    }
    msg = `possession(${id} updated successfully)`;
    await possession.update(req.body);
    res.status(200).json({ msg, possession });
  } catch (error) {
    msg = error.message ?? "Internal server error";
    res.status(500).json({ msg });
  }
};

exports.deletePossession = async (req, res) => {
  try {
    const { id } = req.params;
    const possession = await Possession.findByPk(id);
    if (!possession) {
      msg = "Possion not found";
      res.status(404).json({ msg });
      return;
    }
    await possession.destroy();
    msg = `possession(${id} deleted successfully)`;
    res.status(200).json({ msg });
  } catch (error) {
    msg = error.message ?? "Internal server error";
    res.status(500).json({ msg });
  }
};

exports.getPossessionById = async (req, res) => {
  try {
    const { id } = req.params;
    const possession = await Possession.findByPk(id);
    if (!possession) {
      msg = "Possion not found";
      res.status(404).json({ msg });
      return;
    }
    msg = `possession ${id}:`;
    res.status(200).json({ msg, possession });
  } catch (error) {
    msg = error.message ?? "Internal server error";
    res.status(500).json({ msg });
  }
};
