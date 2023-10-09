import { useDispatch } from 'react-redux'
import { cartToggleAction } from '../../redux-toolkit/cart/cartToggleSlice'
import { useSelector } from 'react-redux/es/exports'

export default function CartItem() {
    const dispatcher = useDispatch()
    const cartItems = useSelector(state => state.addToCart.cartItems)

    const itemCount = cartItems.reduce(
        (accumilatedQuantity, cartItem) => accumilatedQuantity + cartItem.quantity, 0)
        
    const handleClick = () => {
        dispatcher(cartToggleAction.toggleCart())
    }
    return (
        <div className="flex justify-center items-center cursor-pointer" onClick={handleClick} >
            <div>
                <img className=" w-10 relative"
                    alt="shopping cart"
                    src='https://cdn-icons-png.flaticon.com/512/18/18321.png'
                />
            </div>
            <div className=" absolute">
                <span className="text-lg">{itemCount}</span>
            </div>
        </div>
    )
}
