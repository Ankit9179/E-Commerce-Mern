import  express  from "express";
import dotenv from "dotenv";
import Razorpay from 'razorpay'

//import routees 
import PaymentRoutes from "./routes/PaymentRoutes.js";

//config .env file
dotenv.config()

// express object
const app = express() 

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