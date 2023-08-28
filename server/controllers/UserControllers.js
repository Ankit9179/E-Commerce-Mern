 import userModel from "../models/userModel.js"


 ///////////user sign up 
 export const userSignUpController = async (req,res) =>{
    try {
        const {name,email,password} = req.body;
        
        //validation
        if(!name || !email || !password){
            return res.status(400).send({
                success:false,
                message:"please fill all feilds"
            })
        }
         //exisiting user
    const exisitingUser = await userModel.findOne({ email });
    if (exisitingUser) {
      return res.status(401).send({
        success: false,
        message: "user already exisits",
      });
    }
        //user 
        const user = new userModel({name,email,password})
         await user.save()
         return res.status(201).send({
            success:true,
            user
         })

    } catch (error) {
        console.log(` error when saving user in database ${error}`)
    }
 }

////////////////  user sign in
export const userSignInController = async (req,res) => {
  try {
    //get user
    const {email,password} = req.body;
    //check feilds
    if(!email || !password){
      return res.status(401).send({
        success:false,
        message:"please provide email and password"
      })
    }

    // user
    const user = await userModel.findOne({email,password})
    //check user
    if(!user){
      return res.status(200).send({
        success:false,
        message:"wrong email"
      })
    }
    return res.status(200).send({
      success:true,
      message:"login successfully",
      user
    })

  } catch (error) {
    console.log(error)
  }
}