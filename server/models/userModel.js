import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "username is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "passwoud is required"],
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("Users", userSchema);

export default userModel;
