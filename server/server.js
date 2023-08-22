import  express  from "express";
import dotenv from "dotenv";

//config .env file
dotenv.config()

// express object
const app = express() 


//path
app.get("/",(req,res)=>{
    try {
        res.send("hello world")
    } catch (error) {
        console.log(error)
    }
})

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