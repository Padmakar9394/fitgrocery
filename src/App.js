import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from './Pages/HomePage/Home';
import Product from './Pages/Product/productPage';
import About from './Pages/Extra/AboutPage';
import Contact from './Pages/Extra/ContactPage';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
