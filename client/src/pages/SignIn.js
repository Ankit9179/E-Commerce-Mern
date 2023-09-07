import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const SignIn = () => {
    const navigate = useNavigate() //for navigation
    const [inputs, setInputs] = useState({email: "", password: "" });
    //handle inputs
    const handleInputs = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }
    //get user from database
    const handleSignIn = async (e) => {
            try {
                e.preventDefault()
                const {data} = await axios.post("https://e-commerce-mern-server.onrender.com/api/v1/e-commerce/user/sign-in",{
                    email:inputs.email,
                    password:inputs.password
                })
                if(data.success){
                    //save in localstorage
                    localStorage.setItem("user",JSON.stringify(data.user))
                    alert("log In successfuly")
                    navigate("/payment")
                }else{
                    alert("please enter right email and password")
                }
            } catch (error) {
                console.log(error)
            }

    }
  return (
    <>
            <div className=' bg-slate-500 h-screen w-full flex justify-center pt-44'>
                <div className='bg-indigo-400 w-[90%] md:w-[50%] h-[50vh] rounded-md text-white '>
                    <form onSubmit={handleSignIn} className='flex flex-col align-middle justify-center text-center gap-6 p-5 drop-shadow-2xl'>
                        <h1 className='font-serif text-2xl'>Sign in</h1>
                        <input className='block p-2 rounded-full px-5' onChange={handleInputs} required type="email" name="email" value={inputs.email} placeholder='Enter your email' />
                        <input className='block p-2 rounded-full px-5' onChange={handleInputs} required type="password" name="password" value={inputs.password} placeholder='Enter your password' />
                        <button className='bg-black rounded-md  uppercase text-white w-[15%] mx-auto mb-1 p-1 hover:border-2'>Sign In</button>
                        <p onClick={()=>navigate("/sign-up")} className='cursor-pointer hover:text-white'>not a user? Sign Up</p>
                    </form>
                </div>
            </div>
    </>
  )
}

export default SignIn