import React from 'react'
import { useDispatch  } from 'react-redux'
import { Link, Route, Routes } from 'react-router-dom'
import { addToCartAction } from '../../redux-toolkit/cart/addToCartSlice'
import AllProducts from './AllProducts'


function ProductItems({item , title , routeName}) {
  const dispatcher = useDispatch()

  return (
    <div className='m-5'>
      <Routes>
      <Route exact path={`/shop/${routeName}`} element={<AllProducts />} />
      </Routes>
      <Link to={`/shop/${routeName}`}>
      <h1 className='text-3xl p-5 flex justify-center font-bold'>{title.toUpperCase()}</h1><p>Click to view more</p>
      </Link>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'> 
        {
           item.slice(0,4).map((products) =>  (  
            <div className='flex flex-col' key={products.id}>
              <div className='overflow-hidden'>
            <img className=' h-96 w-full object-cover hover:scale-105 transition-transform duration-1000 ease-in-out'
            alt={products.name}
            src={products.imageUrl}
            />
            </div>
            <div className='flex justify-around'>
              <div>
              <p className=' font-bold'>{products.name.toUpperCase()} </p> 
              </div>
              <div>
                <p className='font-bold'>{products.price}$</p>
                </div>
              </div>
              <div className=' flex justify-center'>
              <button className=' bg-black p-1 m-1 text-white hover:text-black hover:bg-white' onClick={()=> dispatcher(addToCartAction.addToCart(products)) }>Add to cart</button>
              </div>
            </div>
          )) 
        }
      </div>
    </div>
  )
}


export default  ProductItems