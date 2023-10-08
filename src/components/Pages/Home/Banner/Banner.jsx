import React from 'react';
import image from './../../../../../public/image/banner.webp';

const Banner = () => {
    return (
        <div className='container'>
           <img className='w-full rounded' src={image} alt="" />
        </div>
    );
};

export default Banner;