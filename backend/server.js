import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connetDB from './config/mongodb.js';
import contactRouter from './routes/contactRouters.js';



//app config
const app = express();
const port = process.env.PORT || 4000
connetDB();

//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//api endpoins
app.use("/api/contacts", contactRouter );

app.listen(port, ()=>{
    console.log(`localhost:${port}`)
})

app.get('/', (req, res)=> {
    res.send("API Working...");
})





