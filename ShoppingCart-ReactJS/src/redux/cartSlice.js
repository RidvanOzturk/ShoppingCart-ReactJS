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
    addToCart: (state, action) => {},
  },
});
