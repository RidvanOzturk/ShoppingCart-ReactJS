import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { carts } = useSelector((state) => state.carts);
    const navigate = useNavigate()
    console.log(carts, "carts");
  
    useEffect(() => {
      dispatch(getCartTotal());
    }, [dispatch]);
  return (
    <div>Cart</div>
  )
}

export default Cart