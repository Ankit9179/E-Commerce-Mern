import { instance } from "../server.js"
const checkOut = async (req,res) =>{
    try {
        const options = {
            amount: 50000,  // amount in the smallest currency unit 100 = 1 rupaya
            currency: "INR",
          };

        const order = await instance.orders.create(options);

        console.log(order)
        res.status(201).send({
            success:true
        })
          
    } catch (error) {
        console.log(error)
    }
}

export {checkOut}