const sequelize = require("../configs/sequelize");
const { DataTypes } = require("sequelize");
const Possession = require("./Possession");

const Terrain = sequelize.define("terrain", {
  terrain_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  possession_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  localisation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  area: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  cadastre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Possession.hasMany(Terrain, {
  foreignKey: "possession_id",
  onDelete: "CASCADE",
});

Terrain.belongsTo(Possession, {
  foreignKey: "possession_id",
});

module.exports = Terrain