import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const storeInLocalStorage = () => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
  cart: fetchFromLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemCart = state.carts.find(
        (item) => item.id === action.payload.id
      );

      if (isItemCart) {
        const tempCart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity;
            let tempTotalPrice = tempQty + item.price;
            return {
              ...item,
              quantity: tempQty,
              totalPrice: tempTotalPrice,
            };
          } else {
            return item;
          }
        });

      state.carts = tempCart;
      storeInLocalStorage(state.carts)

      }else{
        state.carts.push(action.payload)
        storeInLocalStorage(state.carts)
      }
      
    },
    removeFromCart :(state,action) =>{}
  },
});
