import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCartAction } from '../../redux-toolkit/cart/addToCartSlice'
import StripeButton from '../stripe-button/StripeButton'

export default function Checkout() {
    const dispatcher = useDispatch()
    const cartItems = useSelector(state => state.addToCart.cartItems)
    const cartTotal = cartItems.reduce(
        (accumilatedTotal, cartItem) => accumilatedTotal + (cartItem.quantity * cartItem.price), 0)
    return (
        <div className='p-40 pt-5'>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 space-x-3 font-bold'>
                <p className='flex justify-center'>Product</p>
                <p className='flex justify-center'>Description</p>
                <p className='flex justify-center'>Quantity</p>
                <p className='flex justify-center'>Price</p>
                <p className='flex justify-center'>Remove</p>
            </div>
            <hr className=' bg-black m-4 ' />
            <div>
                {
                    cartItems.map(item =>
                        <div className='grid grid-cols-5 items-center space-x-20 p-4 border' key={item.id}>
                            <img src={item.imageUrl} alt='item' />
                            <p>{item.name}</p>
                            <div className='flex'>
                                <p className=' cursor-pointer font-extrabold' onClick={() => dispatcher(addToCartAction.reduceQuantity(item))}>&#10094;</p>
                                <span className=' ml-1 mr-1'>{item.quantity}</span>
                                <p className=' cursor-pointer font-extrabold' onClick={() => dispatcher(addToCartAction.addToCart(item))}>&#10095;</p>
                            </div>
                            <p>${item.price * item.quantity}</p>
                            <button onClick={() => dispatcher(addToCartAction.removeFromCart(item))}>X</button>
                        </div>
                    )
                }
            </div>
            <div className=' flex flex-col items-end m-5 space-y-2'>
                <h1 className=' text-5xl'>TOTAL : ${cartTotal}</h1>
                <StripeButton price={cartTotal} />
            </div>
            <div className='flex flex-col items-center m-20'>
                <p className=' text-3xl text-red-500'>*Please use the following test credit card*</p>
                <p className=' text-3xl text-red-500'>4242 4242 4242 4242 - Exp: 01/24 - CVV: 123</p>
            </div>
        </div>
    )
}
