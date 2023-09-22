import React from 'react'
import Navbar from "../../Components/Navbar/Nav";
import BannerSlider from '../../Components/Banners/BannerSlider';
import HomeCategories from '../../Components/Category/HomeCategories';

const Home = () => {
  return (
    <div>
        <Navbar />
        <BannerSlider />
        <HomeCategories />
        <h1>Home</h1>
    </div>
  )
}

export default Home;