import React from 'react'
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () => {
    return (
        <>
            <div className=" md:flex justify-around  align-middle p-14 bg-black text-white font-serif">
                <div className='left mt-4'>
                    <h1 className='text-3xl mb-5'>about </h1>
                    <p>Hi i am ankit this is my e-commerce website. </p>
                    <p>official10189@gmail.com</p>
                </div>
                <div className='right mt-9'>
                    <h1 className='text-3xl'>contact me with</h1>
                    <div className='flex gap-7 mt-4 '>
                        <a href="https://www.instagram.com/ak_vampire12/?next=%2F"><AiOutlineInstagram className='text-2xl cursor-pointer' /></a>
                        <a href="https://www.linkedin.com/in/ankit-rahi-563752258/"><AiOutlineLinkedin className='text-2xl cursor-pointer' /></a>
                        <a href="https://github.com/Ankit9179"><AiOutlineGithub className='text-2xl cursor-pointer' /></a>
                        <a href="https://e-commerce-mern-client.onrender.com/"><AiOutlineFacebook className='text-2xl cursor-pointer' /></a>
                    </div>
                </div>
                <div className='mt-9'>
                    <h1>&copy; copyright All right reserved</h1>
                </div>
            </div>
        </>
    )
}

export default Footer