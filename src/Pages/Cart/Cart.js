import React from 'react'
import Navbar from '../../Components/Navbar/Nav'
import Footer1 from '../../Components/Footer/Footer1'
import Footer2 from '../../Components/Footer/Footer2'
import SingleBanner from '../../Components/Banners/SingleBanner'

const Cart = () => {
  return (
    <div>
        <Navbar />
        <SingleBanner heading='My Cart'
        bannerImage='https://images.unsplash.com/photo-1694384159175-9365bf093a59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60' />
        <Footer1 />
        <Footer2 />
    </div>
  )
}

export default Cart