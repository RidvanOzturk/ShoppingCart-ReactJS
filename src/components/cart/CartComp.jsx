import React from "react";

const CartComp = ({ cart }) => {
  return (
    <div className="my-10 flex items-center justify-between">
      <img
        className="w-[150px] h-[150px] object-cover"
        src={cart?.image}
        alt=""
      />
      <div className="w-[476px]">
        <div className="text-xl ">{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className="font-bold text-2xl">{cart?.price} $  ({cart?.quantity})</div>
      <div className="bg-red-500 text-white w-[150px] text-center text-lg rounded-md cursor-pointer h-16 flex items-center justify-center">Delete the Product</div>
    </div>
  );
};

export default CartComp;
