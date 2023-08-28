import  express  from "express";
import  {checkOutController,paymentVerification}  from "../controllers/PaymentControllers.js";

//router object
const router = express.Router()

//routes for creating order
router.post("/check",checkOutController)

//routes for paymentvarification 
router.post("/payment-verification",paymentVerification)

export default router