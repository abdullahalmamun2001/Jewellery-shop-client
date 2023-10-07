import axios from 'axios';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const AllJewellery = () => {
    const [jewellerys, setJewellerys] = useState([])
    //     axios.get('/http://localhost:5000/alljewellery')
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);

    axios.get('http://localhost:5000/alljewellery')
        .then(data => {

            setJewellerys(data.data);

        })
        .catch(error => {
            // Handle any errors that occur
            console.error('Error:', error);
        });



    return (
        <div>
            <div className='grid grid-cols-2 w-11/12 mx-auto'>
                {
                    jewellerys.map(jewellery =>
                        <div key={jewellery._id} >
                            <div className='flex'>
                                <div>
                                    <img className='w-72 h-72' src={jewellery.image} alt="" />
                                </div>
                                <div className='m-10'>
                                    <h1 className='text-3xl'>{jewellery.name}</h1>
                                    <h1 className='text-xl text-fuchsia-500 mt-4'>{jewellery.description}</h1>
                                    <p className='text-xl fw-bold mt-6'>Price : {jewellery.price}$</p>
                                    <button className='btn bg-fuchsia-700 bottom-0 mt-10 '><Icon className='text-xl' icon="fluent:cart-24-filled" />Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllJewellery;