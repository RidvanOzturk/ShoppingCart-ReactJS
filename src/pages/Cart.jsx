import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCartTotal } from '../redux/cartSlice';
import CartComp from '../components/cart/CartComp';

const Cart = () => {
    const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);
    const navigate = useNavigate()
    const dispatch =useDispatch()
    console.log(carts,totalAmount,itemCount,"carts");
  
    useEffect(() => {
      dispatch(getCartTotal());
    }, [dispatch]);
  return (
    <div>
      {
        carts?.length > 0 ? <div>
          {
            carts?.map((cart, i)=> (
                <CartComp key={i} cart={cart}/>
            ))
          }
        </div> :
        <div>Your basket is empty...</div>

      }
    </div>
  )
}

export default Cart