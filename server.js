const express  = require('express')
const Possession = require('./src/models/Possession')
const sequelize = require('./src/configs/sequelize')
const app = express()

const q  = async()=>{
    if(sequelize) Possession.sync()
}
q()


const PORT = process.env.SERVER_PORT ?? 3000 
app.listen(()=>{
    console.log(`running on port:${PORT}`);
    
})