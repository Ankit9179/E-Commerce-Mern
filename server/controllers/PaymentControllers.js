import { instance } from "../server.js"
import crypto from 'crypto'
//check out order
export const checkOutController = async (req,res) =>{
    try {
        const options = {
            amount: Number(req.body.price*100),  // get amount from the frontend amount in the smallest currency unit 100 = 1 rupaya
            currency: "INR",
          };
          
        // order  create 
        const order = await instance.orders.create(options);
        res.status(201).json({
            success:true,
            order
        })
          
    } catch (error) {
        console.log(error)
    }
}


// payment verification
export const paymentVerification = (req,res) =>{
     console.log(req.body)
     // get somthing (rp id ,ro id, r signature)
     const {razorpay_payment_id,razorpay_order_id,razorpay_signature} = req.body;

     const body = razorpay_order_id + "|" + razorpay_payment_id ; 
     const exprectedSignature = crypto.createHmac('sha256',process.env.RAZOR_PAY_SECRET_KEY)
     .update(body.toString())
     .digest('hex');

     console.log("a",razorpay_signature)
     console.log("b",exprectedSignature)

    const Autenentic = razorpay_signature === exprectedSignature;

     if(Autenentic){
        //save in database
        // working here
        res.redirect(`https://e-commerce-mern-client.onrender.com/paymentsuccess?reference=${razorpay_payment_id}`)
     }else{
        res.status(400).json({
            success:false,
        }) 
     }

        
   
}

