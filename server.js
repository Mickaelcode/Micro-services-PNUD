const express  = require('express')
// const sequelize = require('./src/configs/sequelize')
// const Fixed = require('./src/models/Fixed')



const app = express()

// const q  = async()=>{
//     if(sequelize) Fixed.sync()
// }
// q()


const PORT = process.env.SERVER_PORT ?? 3000 
app.listen(()=>{
    console.log(`running on port:${PORT}`);
    
})