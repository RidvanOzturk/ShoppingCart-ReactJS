import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};
export const getProducts = createAsyncThunk("getproducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

export const getCategoryProducts = createAsyncThunk(
  "getcategoryproducts",
  async (category) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();
    return data;
  }
);

export const getProductsDetail = createAsyncThunk(
  "getproductsdetails",
  async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        (state.productsStatus = STATUS.SUCCESS),
          (state.products = action.payload);
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAIL;
      })
      .addCase(getProductsDetail.pending, (state, action) => {
        state.productDetailStatus = STATUS.LOADING;
      })
      .addCase(getProductsDetail.fulfilled, (state, action) => {
        (state.productDetailStatus = STATUS.SUCCESS),
          (state.productDetail = action.payload);
      })
      .addCase(getProductsDetail.rejected, (state, action) => {
        state.productDetailStatus = STATUS.FAIL;
      })
      .addCase(getCategoryProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getCategoryProducts.fulfilled, (state, action) => {
        (state.productsStatus = STATUS.SUCCESS),
          (state.products = action.payload);
      })
      .addCase(getCategoryProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAIL;
      });
  },
});

export default productSlice.reducer;
