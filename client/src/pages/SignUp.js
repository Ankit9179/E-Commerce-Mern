import React, { useState } from 'react'

const SignUp = () => {
    const [inputs, setInputs] = useState({ name: "", email: "", password: "" });
    //handle inputs
    const handleInputs = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }
    //save user in database
    const handleSignUp = (e) => {
        localStorage.setItem("user", JSON.stringify(inputs)) //set user in database
    }
    return (
        <>
            <div className=' bg-indigo-400 h-screen w-full flex justify-center pt-44'>
                <div className='bg-slate-500 w-[50%] h-[50vh] rounded-md '>
                    <form onSubmit={handleSignUp} className='flex flex-col align-middle justify-center text-center gap-6 p-5 drop-shadow-2xl'>
                        <h1 className='font-serif text-2xl'>Sign Up</h1>
                        <input className='block p-1 rounded-full px-3' onChange={handleInputs} required type="text" name="name" value={inputs.name} placeholder='Enter your name' />
                        <input className='block p-1 rounded-full px-3' onChange={handleInputs} required type="email" name="email" value={inputs.email} placeholder='Enter your email' />
                        <input className='block p-1 rounded-full px-3' onChange={handleInputs} required type="password" name="password" value={inputs.password} placeholder='Enter your password' />
                        <button className='bg-black rounded-md  uppercase text-white w-[15%] mx-auto mb-3 p-1 hover:border-2'>Sin up</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp