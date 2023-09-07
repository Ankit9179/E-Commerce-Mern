import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageData from '../ItemData'



const SliderCom = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        dots: true
    };

    return (
        <div className='mt-[100px] w-full inline-block z-20   '>
            <Slider {...settings}>
                {
                    imageData.map((item) => {
                        return (
                            <div className=''>
                                <img className='w-[200px] mx-auto' src={item.image} alt="img" />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default SliderCom