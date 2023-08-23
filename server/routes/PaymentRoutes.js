import  express  from "express";
import  {checkOut}  from "../controllers/PaymentControllers.js";

//router object
const router = express.Router()

//routes
router.post("/check",checkOut)

export default router