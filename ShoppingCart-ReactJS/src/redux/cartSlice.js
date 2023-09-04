import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: fetchFromLocalStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
});
