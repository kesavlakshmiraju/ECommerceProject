import { Link } from "react-router-dom"
import crown from './crown.svg'
import { auth } from "./firebase/Firebase"
import { useSelector } from "react-redux"
import CartDropdown from "./cart/CartDropdown"
import CartItem from "./cart/CartItem"

export const Navbar = () => {
    const currentUser = useSelector((state) => state.currentUser.currentUser)
    const hidden = useSelector(state => state.hidden.hidden)
    //console.log(currentUser)
    return (
        <div>
            
            <div className='text-3xl max-w-7xl mx-auto  mb-6 flex justify-between mt-4'>
                <div>
                    <Link to='/'>
                        <img className='w-16'
                            alt="crown"
                            src={crown}
                        />
                    </Link>
                </div>
                <div className="flex items-center space-x-8">
                    <Link to='/shop'>
                        <h1 className='hidden md:inline-flex'>SHOP</h1>
                    </Link>
                    <Link to='about' >
                        <h1 className='hidden md:inline-flex'>ABOUT</h1>
                    </Link>
                    {
                        currentUser ?
                            (
                                <button onClick={() => auth.signOut()}>SIGN OUT</button>
                            ) :
                            (
                                <Link to='/signin'>
                                    <h1>SIGN IN</h1>
                                </Link>
                            )
                    }
                    <CartItem />
                </div>
            </div>
            {
                hidden ? (<CartDropdown />) : (null)
            }

        </div>
    )
}
