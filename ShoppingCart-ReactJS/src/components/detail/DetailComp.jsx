import React, { useState } from "react";

const DetailComp = ({ productDetail }) => {
  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const increment = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
  };
  const addBasket = () => {};

  console.log(productDetail);
  return (
    <div className="flex gap-10 my-10">
      <img
        className="w-[700px] h-[700px] object-cover"
        src={productDetail?.image}
        alt=""
      />
      <div className="">
        <div className="text-4xl font-bold ">{productDetail?.title}</div>
        <div className="my-2 text-2xl">{productDetail?.description}</div>
        <div className="my-2 text-xl text-red-500">
          Rating : {productDetail?.rating?.rate}
        </div>
        <div className="my-2 text-xl text-red-500">
          Count : {productDetail?.rating?.count}
        </div>
        <div className="text-5xl font-bold">
          {productDetail?.price}
          <span className="text-4xl"> $</span>
        </div>

        <div className="flex items-center gap-5 my-4 border w-[150px] text-center justify-center rounded-xl">
          <div onClick={decrement} className="text-5xl cursor-pointer">
            -
          </div>
          <input
            className="w-11 text-center text-4xl font-bold"
            type="text"
            value={quantity}
          />
          <div onClick={increment} className="text-4xl cursor-pointer">
            +
          </div>
        </div>
        <div
          onClick={addBasket}
          className="my-4 border w-[200px] text-2xl bg-gray-200 cursor-pointer h-16 flex items-center justify-center rounded-md"
        >
          Add to Cart
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
