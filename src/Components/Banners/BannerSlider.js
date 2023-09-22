import React from 'react'
import Slider from 'react-slick'
import "./BannerSlider.css";

const BannerSlider = () => {
    const data = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1694384159175-9365bf093a59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
            title: "Fresh Vegetables & fruits at your doorstep",
            description: 'We deliver fresh vegetables & fruits at your doorstep',
            button: 'https://www.google.com'
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1694428276978-32c60b591548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
            title: "Fresh Vegetables & fruits at your doorstep",
            description: 'We deliver fresh vegetables & fruits at your doorstep',
            button: 'https://www.google.com'
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1693822877703-7cd5edd94523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
            title: "Fresh Vegetables & fruits at your doorstep",
            description: "Cherries and berries. Sweet peaches and nectarines. Summer baking season is here, ans I couldn't be more delighted ",
            button: 'https://www.google.com'
        },
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
  return (
    <div className='bannerslider'>
        <Slider className='bannerslider' {...settings}>
            {
                data.map(item => {
                    return (
                        <div className='imagecont' key={item.id}>
                            <img src={item.image} alt='noimg' />
                            <div className='content'>
                                <h1>{item.title}</h1>
                                <span>{item.description}</span>
                                <button>Shop More</button>
                            </div>
                        </div>
                    )
                })
            }
        </Slider>
    </div>
  )
}

export default BannerSlider