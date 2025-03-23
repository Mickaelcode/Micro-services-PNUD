const express  = require('express')
require("dotenv").config();

const app = express()


const PORT = process.env.SERVER_PORT ?? 3000 
app.listen(()=>{
    console.log(`running on port:${PORT}`);
    
})