const sequelize = require("../configs/sequelize");
const { DataTypes } = require("sequelize");
const Possession = require("./Possession");

const Batiment = sequelize.define("batiment", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  possession_id:{
    type:DataTypes.INTEGER,
    allowNull:false
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

Possession.hasMany(Batiment,{
    foreignKey:"possession_id",
    onDelete:"CASCADE"
})
Batiment.belongsTo(Possession,{
    foreignKey:"possession_id"
})

module.exports = Batiment;
