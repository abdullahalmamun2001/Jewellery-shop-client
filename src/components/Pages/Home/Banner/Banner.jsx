import React from 'react';
import "./Banner.css"
import image from './../../../../../public/image/banner.webp';

const Banner = () => {
    return (
        // <div className='container '>
        //    <img className='w-full rounded' src={image} alt="" />
        // </div>
        <div className="box">
            <div className='mt-'>
                <h1 className='text-3xl relative left-56 text-lime-700 top-20'>Jewellary Just For You</h1>
                <p className='text-xl text-lime-700 relative top-28 w-2/3 mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dolorem illum voluptatibus dicta facere earum pariatur odio ipsam? Quaerat dicta, incidunt magnam itaque aspernatur accusamus, odio molestias sit necessitatibus velit officiis beatae. Quos aliquid labore culpa numquam maiores dolorum autem?</p>
                <button className='btn btn-red relative left-56 text-lime-700 top-32'>See More</button>
            </div>
        </div>
    );
};

export default Banner;