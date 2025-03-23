const express  = require('express')
// const sequelize = require('./src/configs/sequelize')
// const Batiment = require('./src/models/Batiment')
const app = express()

// const q  = async()=>{
//     if(sequelize) Batiment.sync()
// }
// q()


const PORT = process.env.SERVER_PORT ?? 3000 
app.listen(()=>{
    console.log(`running on port:${PORT}`);
    
})