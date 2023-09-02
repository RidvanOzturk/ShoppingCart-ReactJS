import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProductsDetail } from '../redux/productSlice';

const Detail = () => {
    const {id}=  useParams();
    const dispatch = useDispatch(); 
    const {productDetail, productDetailStatus} = useSelector(state =>state.products)

useEffect(()=>{
    dispatch(getProductsDetail())
},[dispatch,id])
console.log(productDetail,"productDetail");

  return (
    <div>Detail</div>
  )
}

export default Detail