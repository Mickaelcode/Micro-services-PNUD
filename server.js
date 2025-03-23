const express  = require('express')
const sequelize = require('./src/configs/sequelize')
const Possession = require('./src/models/Possession')
const Batiment = require('./src/models/Batiment')
const Vehicle = require('./src/models/Vehicle')
const app = express()

const q  = async()=>{
    if(sequelize) {
        // Possession.sync({force:true})
        // Batiment.sync({force:true})
        // Vehicle.sync({force:true})
    }
}
q()


const PORT = process.env.SERVER_PORT ?? 3000 
app.listen(()=>{
    console.log(`running on port:${PORT}`);
    
})