import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate() //for navigation
    const [inputs, setInputs] = useState({ name: "", email: "", password: "" });
    //handle inputs
    const handleInputs = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }
    //save user in database
    const handleSignUp = () => {
        localStorage.setItem("user", JSON.stringify(inputs)) //set user in database
        alert("user register successfuly")
        navigate("/sign-in")
    }
    return (
        <>
            <div className=' bg-indigo-400 h-screen w-full flex justify-center pt-44'>
                <div className='bg-slate-500 w-[50%] h-[50vh] rounded-md '>
                    <form onSubmit={handleSignUp} className='flex flex-col align-middle justify-center text-center gap-6 p-4 drop-shadow-2xl'>
                        <h1 className='font-serif text-2xl'>Sign Up</h1>
                        <input className='block p-1 rounded-full px-3' onChange={handleInputs} required type="text" name="name" value={inputs.name} placeholder='Enter your name' />
                        <input className='block p-1 rounded-full px-3' onChange={handleInputs} required type="email" name="email" value={inputs.email} placeholder='Enter your email' />
                        <input className='block p-1 rounded-full px-3' onChange={handleInputs} required type="password" name="password" value={inputs.password} placeholder='Enter your password' />
                        <button className='bg-black rounded-md  uppercase text-white w-[15%] mx-auto hover:border-2'>Sin up</button>
                        <p onClick={() => navigate("/sign-in")} className='cursor-pointer hover:text-white mt-[-19px]'>already a user? Sign In</p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp