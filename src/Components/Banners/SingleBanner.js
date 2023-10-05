import React from 'react';

import "./SingleBanner.css";

const SingleBanner = ({heading, bannerImage}) => {
  return (
    <div className='singlebanner'>
        <div className='bannerimgfilter'></div>
        <img src={bannerImage} alt='no-img' className='bannering' />
        <div className='bannerheading'>
            <h1>{heading}</h1>
        </div>
    </div>
  )
}

export default SingleBanner;