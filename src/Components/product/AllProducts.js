import React, { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux/es/exports'
import { productFilterAction } from '../../redux-toolkit/products/productSlice';
import { addToCartAction } from '../../redux-toolkit/cart/addToCartSlice';

export default function AllProducts() {
  const dispatcher = useDispatch();
  const products = useSelector(state => state.products.filteredProducts);
  const path =window.location.pathname.split('/')
  const item = path[2]
  useEffect(() => {
     console.log(dispatcher(productFilterAction.filteredProducts(item))); 
  },[dispatcher,item])
  return (
    <div>
      <h1 className='text-3xl p-5 flex justify-center font-bold'>{products ? products[0].title.toUpperCase() : null}</h1>
    <div className=' grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>  
      { 
        products ? 
        (
          products[0].items.map(item =>
            <div className='flex flex-col' key={item.id}  >
              <div className='overflow-hidden'>
            <img className=' h-96 w-full object-cover hover:scale-105 transition-transform duration-1000 ease-in-out'
            alt={item.name}
            src={item.imageUrl}
            />
            </div>
            <div className='flex justify-around'>
              <div>
              <p className=' font-bold'>{item.name.toUpperCase()} </p> 
              </div>
              <div>
                <p className='font-bold'>{item.price}$</p>
                </div>
              </div>
              <div className=' flex justify-center'>
              <button className=' bg-black p-1 m-1 text-white hover:text-black hover:bg-white' onClick={()=> dispatcher(addToCartAction.addToCart(item)) }>Add to cart</button>
              </div>
            </div>  
            )
        ) : null
      }
    </div>
    </div>
  )
}
