import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className="">
            <div className="text-6xl font-bold">Quality is no coincidence!</div>
            <div className="text-lg my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, sed. Laudantium obcaecati inventore modi libero
              quos odit ratione vitae ipsum et quae? Quaerat, eius perferendis
              deserunt explicabo a sapiente delectus?
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              Review
            </div>
          </div>
          <img
            src="https://raw.githubusercontent.com/RidvanOzturk/ShoppingCart-ReactJS/main/ShoppingCart-ReactJS/src/assets/images/nike1.png"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
        <div className="">
            <div className="text-6xl font-bold">Quality is no coincidence!</div>
            <div className="text-lg my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, sed. Laudantium obcaecati inventore modi libero
              quos odit ratione vitae ipsum et quae? Quaerat, eius perferendis
              deserunt explicabo a sapiente delectus?
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              Review
            </div>
          </div>
          <img
            src="https://raw.githubusercontent.com/RidvanOzturk/ShoppingCart-ReactJS/main/ShoppingCart-ReactJS/src/assets/images/nike2.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
