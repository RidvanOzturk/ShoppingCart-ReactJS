import React from 'react'

const Sorting = () => {
  return (
    <div className='bg-gray-100 my-5 py-5 px-2 flex items-center justify-end'>
        <select className='bg-white py-3 px-5' name='' id=''>
            <option disabled value="">Choose one</option>
            <option  value="inc">Increasing</option>
            <option  value="dec">decreasing</option>
        </select>
    </div>
  )
}

export default Sorting