const sequelize = require("../configs/sequelize");
const { DataTypes } = require("sequelize");
const Possession = require("./Possession");

const Fixed = sequelize.define("fixed", {
  fixed_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  possession_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  localisation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Possession.hasMany(Fixed, {
  foreignKey: "possession_id",
  onDelete: "CASCADE",
});

Fixed.belongsTo(Possession, {
  foreignKey: "possession_id",
});


module.exports = Fixed