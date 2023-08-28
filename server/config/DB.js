import mongoose from "mongoose";

//connect database
const connectDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGOO_ULR)
        console.log(`mongoo connection successful with ${mongoose.connection.host}`)
    } catch (error) {
        console.log(`error mongoo connection mongodb ${error}`)
    }
}

export default connectDB