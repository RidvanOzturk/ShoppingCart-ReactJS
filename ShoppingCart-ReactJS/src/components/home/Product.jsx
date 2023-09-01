import React from 'react'

const Product = ({product}) => {
  return (
    <div className='w-[400px] p-2 m-2 border rounded-md relative'>
      <div className='text-2xl font-bold absolute rounded-md top-0 right-0 bg-gray-600 text-white p-2 m-1'>{product?.price}<span className='text-sm'>$</span></div>
        <img className="w-[200px] h-[200px] object-cover m-auto" src={product?.image} alt=''/>
    </div>
  )
}

export default Product