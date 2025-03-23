const express  = require('express')
const sequelize = require('./src/configs/sequelize')
const app = express()


const PORT = process.env.SERVER_PORT ?? 3000 
app.listen(()=>{
    console.log(`running on port:${PORT}`);
    
})