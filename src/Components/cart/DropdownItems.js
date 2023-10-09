import React from 'react'


export default function DropdownItems({ item: { name, price, quantity, imageUrl } }) {

  return (
    <div className='p-2 '>
      <div className='flex items-center space-x-2'>
        <img src={imageUrl} alt='item' className=' w-28' />
        <div className='flex flex-col items-center'>
          <p className=' text-center'>{name}</p>
          <p>{quantity} X ${price} </p>
        </div>
      </div>
    </div>
  )
}
