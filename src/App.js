import './App.css';
import React, {  useEffect } from 'react';
import { HomePage } from './Components/homepage/HomePage';
import AboutPage from './Components/AboutPage/AboutPage';
import { Navbar } from './Components/Navbar';
import ProductDetails from './Components/product/ProductDetails';
import SignInAndSignUp from './Components/signin-and-signout/signin-signout';
import { BrowserRouter as Router, Routes, Route , Navigate} from 'react-router-dom'
import { auth , createUserProfileDocument } from './Components/firebase/Firebase';
import { useSelector , useDispatch } from 'react-redux';
import { userActions } from './redux-toolkit/user/userSlice';
import Checkout from './Components/checkout/Checkout';
import AllProducts from './Components/product/AllProducts';

function App() {
  
  const currentUser = useSelector( state => state.currentUser.currentUser)
  const dispatcher = useDispatch()

  useEffect( () => {
    // Anything in here is fired on component mount.
    
    const unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapshot => {
          dispatcher(userActions.setCurrentUser({id : snapshot.id,
            ...snapshot.data()}))
        } )
      }
      else{
        dispatcher(userActions.setCurrentUser(null))
      }      
  })
  return() => {
    // Anything in here is fired on component unmount.
    unsubscribeFromAuth()
  }
  },[ dispatcher ]);

    return (
      <div className='max-w-7xl mx-auto  font-mono'>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/about' element={<AboutPage />} />
            <Route exact path='/shop' element={<ProductDetails />} />
            <Route exact path='/shop/*' element={<AllProducts />} />
            <Route exact path='/checkout' element={<Checkout />} />
            <Route exact path='/signin' element={ currentUser ? (<Navigate to='/' replace /> ) : (<SignInAndSignUp />) } />
          </Routes>
        </Router>
      </div>
    );
  }



export default App;
