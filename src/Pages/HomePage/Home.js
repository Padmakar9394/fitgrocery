import React from 'react'
import Navbar from "../../Components/Navbar/Nav";
import BannerSlider from '../../Components/Banners/BannerSlider';
import HomeCategories from '../../Components/Category/HomeCategories';
import Product_Sidebar from '../../Components/Product/Product_Sidebar';
import Footer1 from '../../Components/Footer/Footer1';
import Footer2 from '../../Components/Footer/Footer2';

const Home = () => {
  return (
    <div>
        <Navbar  reloadnavbar={false} />
        <BannerSlider />
        <HomeCategories />
        <Product_Sidebar />
        <Footer1 />
        <Footer2 />
    </div>
  )
}

export default Home;