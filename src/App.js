import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from './Pages/HomePage/Home';
import Product from './Pages/Product/productPage';
import About from './Pages/Extra/AboutPage';
import Contact from './Pages/Extra/ContactPage';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Signup from './Pages/Auth/Signup';
import Login from './Pages/Auth/Login';
import ForgotPassword from './Pages/Auth/ForgotPassword';
import Cart from './Pages/Cart/Cart';
import UserProfile from './Pages/User/UserProfile';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/product/:prodid' element={<Product />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/user/:activepage' element={<UserProfile />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={
          <div>
            <h1>404 NOT FOUND!</h1>
          </div>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
