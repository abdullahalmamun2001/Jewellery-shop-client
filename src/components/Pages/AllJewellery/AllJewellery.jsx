import axios from 'axios';
import React, { useState } from 'react';
import SingleJewellery from './SingleJewellery';

const AllJewellery = () => {
    const [jewellerys, setJewellerys] = useState([])
    //     axios.get('/https://demo-theta-sepia.vercel.app/alljewellery')
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);

    axios.get('https://demo-theta-sepia.vercel.app/alljewellery')
        .then(data => {

            setJewellerys(data.data);

        })
        .catch(error => {
            // Handle any errors that occur
            // console.error('Error:', error);
        });



    return (
        <div>
            <div>
                <h1 className='text-center text-3xl text-cyan-700 my-10'>Our All Jewellerey</h1>
            </div>
            <div className='grid grid-cols-2 w-11/12 mx-auto'>
                {
                    jewellerys.map(jewellery=><SingleJewellery key={jewellery._id} jewellery={jewellery}></SingleJewellery>)
                }
            </div>
        </div>
    );
};

export default AllJewellery;