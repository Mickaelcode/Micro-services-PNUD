const express  = require('express')
const router = require('./routes/PossessionRoute')
const cors = require('cors')




const app = express()
app.use(cors());
app.use(express.json());

app.use('/possession',router)


const PORT = process.env.SERVER_PORT ?? 3000 
app.listen(PORT,()=>{
    console.log(`running on port:${PORT}`);
    
})