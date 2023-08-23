import  express, { json }  from "express";
import dotenv from "dotenv";
import Razorpay from 'razorpay'
import cors from 'cors'
//import routees 
import PaymentRoutes from "./routes/PaymentRoutes.js";


//config .env file
dotenv.config()

// express object
const app = express() 

//add cors 
app.use(cors()) // you can send request url fron port to backend port
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//rozoupay instance
export const instance = new Razorpay({
    key_id: process.env.RAZOR_PAY_KEY,
    key_secret: process.env.RAZOR_PAY_SECRET_KEY,
  });

//routes
app.use("/api",PaymentRoutes)

//port
const port = process.env.PORT  || 8080


//listen  app
app.listen(port,()=>{
    try {
        console.log(`app is listening on port ${port} in ${process.env.DEV_MODE}`)
    } catch (error) {
        console.log(error)
    }
})