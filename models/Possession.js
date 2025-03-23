const sequelize = require('../configs/sequelize')
const {DataTypes} = require('sequelize')

const Possession = sequelize.define("possession",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    contribuable_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
})

module.exports = Possession;