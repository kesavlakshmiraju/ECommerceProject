import React from 'react'
import DropdownItems from './DropdownItems';
import {  useSelector , useDispatch } from 'react-redux/es/exports';
import { useNavigate  } from 'react-router-dom';
import { cartToggleAction } from '../../redux-toolkit/cart/cartToggleSlice';

const CartDropdown = () => {
    const cartItems = useSelector(state => state.addToCart.cartItems)
    const dispatcher = useDispatch()
    const navigate = useNavigate();

    const handleClick = (e) => {
      e.preventDefault()
      navigate('/checkout')
      dispatcher(cartToggleAction.toggleCart())
    }
  return (
    
    <div className='right-0 absolute w-[260px] h-[340px]  border-2 border-black top-[80px] lg:right-32 md:right-0  z-10 bg-white flex flex-col  '>
        <div className='h-[280px] flex flex-col overflow-auto'>
            {
              cartItems.length ?
              cartItems.map((item => <DropdownItems key={item.id} item={item} /> ))
              : <p className=' text-black m-auto'>Your cart is empty</p>
            }
        </div>
        <div className='m-auto mb-2 '>
            <button className='text-white bg-black p-2  hover:bg-white hover:text-black' onClick={handleClick}>GO TO CHECK OUT</button>
        </div>

    </div>
  )
}

export default CartDropdown;