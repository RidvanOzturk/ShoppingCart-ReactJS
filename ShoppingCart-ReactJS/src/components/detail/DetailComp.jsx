import React from 'react'

const DetailComp = ({productDetail}) => {
  console.log(productDetail);
  return (
    <div>
        <img src={productDetail?.image} alt='' />
        <div className=''>
            <div>
            {productDetail?.title}  
            </div>
        </div>
    </div>
  )
}

export default DetailComp