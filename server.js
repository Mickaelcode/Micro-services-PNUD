const express  = require('express')
const cors = require('cors');
const routes = require('./routes/main');




const app = express()
app.use(cors());
app.use(express.json());

app.use('/servicebien',routes)


const PORT = process.env.SERVER_PORT ?? 3000 
const IP = "192.168.43.77"
app.listen(PORT,IP,()=>{
    console.log(`running on port:${PORT}`);
    
})