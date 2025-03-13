import bodyParser from "body-parser"
import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import route  from "./routes/route.js"


const app=express()
const router = express.Router();

app.use(router)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



dotenv.config()

const PORT=process.env.PORT || 5000
const MONGOURL=process.env.MONGO_URL

mongoose.connect(MONGOURL).then(()=>{
    console.log("Data base connected successfully")
    app.listen(PORT,()=>{
        console.log(`Server is running on port`)
    })
}).catch((error)=>console.log(error))

app.use("/api/user",route)

