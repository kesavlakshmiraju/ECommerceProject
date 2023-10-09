import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div className=' space-y-3'>
      <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-2'>

        <Link to='/shop/hats' >
          <div className='flex justify-center items-center'>
            <div className=' overflow-hidden relative w-full'>
              <img className='h-72 w-full object-cover hover:scale-105 transition-transform duration-1000 ease-in-out'
                alt='jackets'
                src='https://i.ibb.co/cvpntL1/hats.png'
              />
            </div>
            <div className='absolute border border-black bg-white p-5 opacity-75 text-center'>
              <h1 className='text-3xl text-center text-black font-bold'>HATS</h1>
              <span className=' text-black '>SHOP NOW</span>
            </div>
          </div>
        </Link>

        <Link to='/shop/jackets' >
          <div className='flex justify-center items-center '>
            <div className=' overflow-hidden relative w-full'>
              <img className='h-72 w-full  object-cover hover:scale-105 transition-transform duration-1000 ease-in-out'
                alt='jackets'
                src='https://i.ibb.co/px2tCc3/jackets.png'
              />
            </div>
            <div className='absolute border border-black bg-white p-5 opacity-75 text-center'>
              <h1 className='text-3xl text-center text-black font-bold'>JACKETS</h1>
              <span className=' text-black '>SHOP NOW</span>
            </div>
          </div>
        </Link>

        <Link to='/shop/sneakers' >
          <div className='flex justify-center items-center '>
            <div className=' overflow-hidden relative w-full'>
              <img className='h-72 w-full object-cover hover:scale-105 transition-transform duration-1000 ease-in-out'
                alt='sneakers'
                src='https://i.ibb.co/0jqHpnp/sneakers.png'
              />
            </div>
            <div className='absolute border border-black bg-white p-5 opacity-75 text-center'>
              <h1 className='text-3xl text-center text-black font-bold'>SNEAKERS</h1>
              <span className=' text-black '>SHOP NOW</span>
            </div>
          </div>
        </Link>

      </div>

      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>

      <Link to='/shop/womens' >
          <div className='flex justify-center items-center'>
            <div className=' overflow-hidden relative w-full'>
              <img className='h-80 w-full object-cover hover:scale-105 transition-transform duration-1000 ease-in-out'
                alt='WOMEN'
                src='https://i.ibb.co/GCCdy8t/womens.png'
              />
            </div>
            <div className='absolute border border-black bg-white p-5 opacity-75 text-center'>
              <h1 className='text-3xl text-center text-black font-bold'>WOMEN</h1>
              <span className=' text-black '>SHOP NOW</span>
            </div>
          </div>
        </Link>

        <Link to='/shop/mens' >
          <div className='flex justify-center items-center'>
            <div className=' overflow-hidden relative w-full'>
              <img className='h-80 w-full object-cover hover:scale-105 transition-transform duration-1000 ease-in-out'
                alt='MEN'
                src='https://i.ibb.co/R70vBrQ/men.png'
              />
            </div>
            <div className='absolute border border-black bg-white p-5 opacity-75 text-center'>
              <h1 className='text-3xl text-center text-black font-bold'>MEN</h1>
              <span className=' text-black '>SHOP NOW</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
