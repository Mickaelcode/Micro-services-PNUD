const sequelize = require("../configs/sequelize");
const { DataTypes } = require("sequelize");
const Possession = require("./Possession");

const Vehicle = sequelize.define("vehicle", {
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  possession_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  matricule: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mark: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  power: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
});

Possession.hasMany(Vehicle, {
  foreignKey: "possession_id",
  onDelete: "CASCADE",
});

Vehicle.belongsTo(Possession, {
  foreignKey: "possession_id",
});

module.exports = Vehicle
