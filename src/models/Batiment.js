const sequelize = require("../configs/sequelize");
const { DataTypes } = require("sequelize");

const Batiment = sequelize.define("batiment", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  lot: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  localisation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  land_title: {
    type: DataTypes.STRING,

    allowNull: false,
  },
  hold: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  usage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  reference: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Batiment;
