import React from 'react';
import one from './../../../../../public/image/one.png'
import two from './../../../../../public/image/two.png'
import three from './../../../../../public/image/three.jpeg'
import four from './../../../../../public/image/four.jpeg'
import five from './../../../../../public/image/five.jpeg'
import six from './../../../../../public/image/six.jpeg'

const Gallery = () => {
    return (
        <div>
            <div className='my-10'>
                <h1 className='text-3xl text-cyan-500 text-center'>Our Photo Gallery</h1>
            </div>
            <div className='grid grid-cols-3 w-2/3 mx-auto gap-4'>
                <img className='h-40 w-64 hover:scale-110 ' src={one} alt="" />
                <img className='h-40 w-64 hover:scale-110 ' src={two} alt="" />
                <img className='h-40 w-64 hover:scale-110 ' src={three} alt="" />
                <img className='h-40 w-64 hover:scale-110 ' src={four} alt="" />
                <img className='h-40 w-64 hover:scale-110 ' src={five} alt="" />
                <img className='h-40 w-64 hover:scale-110 ' src={six} alt="" />
            </div>
        </div>
    );
};

export default Gallery;