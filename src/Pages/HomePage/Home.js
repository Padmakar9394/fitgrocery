import React from 'react'
import Navbar from "../../Components/Navbar/Nav";
import BannerSlider from '../../Components/Banners/BannerSlider';
import HomeCategories from '../../Components/Category/HomeCategories';
import Product_Sidebar from '../../Components/Product/Product_Sidebar';

const Home = () => {
  return (
    <div>
        <Navbar />
        <BannerSlider />
        <HomeCategories />
        <Product_Sidebar />
        <h1>Home</h1>
    </div>
  )
}

export default Home;