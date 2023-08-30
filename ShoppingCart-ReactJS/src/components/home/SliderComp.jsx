import React from 'react'
import Slider from "react-slick"

const SliderComp = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
        <Slider {...settings}>
    <div className=' !flex items-center'>
      <div>
        <div className='text-5xl font-bold'>Our best products!</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit corporis voluptate voluptatibus tempora sunt sequi quasi laborum esse dignissimos a voluptatum perspiciatis quaerat quod facere, provident ipsam eligendi doloribus iste?</div>
        <div>incele</div>
        <img src='' alt='nike1'/>
      </div>
    </div>
        </Slider>
  </div>
  )
}

export default SliderComp