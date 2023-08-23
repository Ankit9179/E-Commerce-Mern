import { instance } from "../server.js"
const checkOut = async (req,res) =>{
    try {
        const options = {
            amount: Number(req.body.price*100),  // amount in the smallest currency unit 100 = 1 rupaya
            currency: "INR",
          };

        const order = await instance.orders.create(options);

        res.status(201).send({
            success:true,
            order
        })
          
    } catch (error) {
        console.log(error)
    }
}

export {checkOut}