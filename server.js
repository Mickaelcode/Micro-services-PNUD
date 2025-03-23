const express  = require('express')
const Possession = require('./src/models/Possession')
const Batiment = require('./src/models/Batiment')
const sequelize = require('./src/configs/sequelize')
// const Fixed = require('./src/models/Fixed')



const app = express()

const q  = async()=>{
    if(sequelize) {
        Batiment.sync({force:true})
        // Batiment.sync({alter:true})
    }
}
// q()


const PORT = process.env.SERVER_PORT ?? 3000 
app.listen(()=>{
    console.log(`running on port:${PORT}`);
    
})