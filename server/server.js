import  express, { json }  from "express";
import dotenv from "dotenv";
import connectDB from "./config/DB.js";
import Razorpay from 'razorpay'
import cors from 'cors'

//import routees 
import UserRoutes from './routes/UserRoutes.js'
import PaymentRoutes from "./routes/PaymentRoutes.js";


//config .env file
dotenv.config()

// express object
const app = express() 

//config mongodb
connectDB()

//add cors 
app.use(cors()) // you can send request url fron port to backend port
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//rozoupay instance
export const instance = new Razorpay({
    key_id: process.env.RAZOR_PAY_KEY,
    key_secret: process.env.RAZOR_PAY_SECRET_KEY,
  });

  //get razorpay id key 
  app.get("/api/v1/e-commerce/key-id",(req,res)=>{
      res.status(200).json({key:process.env.RAZOR_PAY_KEY})
    })
    
 //////////routes
 //user
 app.use('/api/v1/e-commerce/user',UserRoutes)
 //payment
 app.use("/api/v1/e-commerce/order",PaymentRoutes)

//port
const port = process.env.PORT  || 8000


//listen  app
app.listen(port,()=>{
    try {
        console.log(`app is listening on port ${port} in ${process.env.DEV_MODE}`)
    } catch (error) {
        console.log(error)
    }
})























// import  express, { json }  from "express";
// import dotenv from "dotenv";
// import Razorpay from 'razorpay'
// import cors from 'cors'
// //import routees 
// import PaymentRoutes from "./routes/PaymentRoutes.js";


// //config .env file
// dotenv.config()

// // express object
// const app = express() 

// //add cors 
// app.use(cors()) // you can send request url fron port to backend port
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))

// //rozoupay instance
// export const instance = new Razorpay({
//     key_id: process.env.RAZOR_PAY_KEY,
//     key_secret: process.env.RAZOR_PAY_SECRET_KEY,
//   });

//   //get razorpay id key 
//   app.get("/api/key-id",(req,res)=>{
//       res.status(200).json({key:process.env.RAZOR_PAY_KEY})
//     })
    
//  //routes
//  app.use("/api",PaymentRoutes)

// //port
// const port = process.env.PORT  || 8000


// //listen  app
// app.listen(port,()=>{
//     try {
//         console.log(`app is listening on port ${port} in ${process.env.DEV_MODE}`)
//     } catch (error) {
//         console.log(error)
//     }
// })