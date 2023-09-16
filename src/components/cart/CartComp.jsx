import React from 'react'

const CartComp = ({cart}) => {
  return (
    <div className='my-10'>
        <img className='w-[150px] h-[150px] object-cover' src={cart?.image} alt=''/>
        <div>
            <div>{cart?.title}</div>
            <div>{cart?.description}</div>
        </div>
    </div>
  )
}

export default CartComp