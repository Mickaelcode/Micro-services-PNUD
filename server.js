const express  = require('express')
const cors = require('cors');
const possessionRoute = require('./routes/PossessionRoute');




const app = express()
app.use(cors());
app.use(express.json());

app.use('/possession',possessionRoute)


const PORT = process.env.SERVER_PORT ?? 3000 
app.listen(PORT,()=>{
    console.log(`running on port:${PORT}`);
    
})