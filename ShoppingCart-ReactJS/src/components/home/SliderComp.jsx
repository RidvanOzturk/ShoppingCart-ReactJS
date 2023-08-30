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
      <div>
            <div> <img src='https://raw.githubusercontent.com/RidvanOzturk/ShoppingCart-ReactJS/main/ShoppingCart-ReactJS/src/assets/images/nike1.png' alt=''/>
           </div>
            <div> <img src='https://raw.githubusercontent.com/RidvanOzturk/ShoppingCart-ReactJS/main/ShoppingCart-ReactJS/src/assets/images/nike2.png' alt=''/>
           </div>
      </div>
        </Slider>
  </div>
  )
}

export default SliderComp