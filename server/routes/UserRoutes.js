import express  from "express";
import {userSignUpController,userSignInController} from '../controllers/UserControllers.js'

//router object
const router = express.Router()

//sign up || post
router.post('/sign-up',userSignUpController)

//sign in || post
router.post('/sign-in',userSignInController)

export default router