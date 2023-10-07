import axios from 'axios';
import React, { useState } from 'react';

const AllJewellery = () => {
    const [ jewellerys, setJewellerys ] = useState([])
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
            <ul>
                {
                    jewellerys.map(jewellery=>
                        <div key={jewellery._id}>
                            <div>
                                <img className='w-96 h-96' src={jewellery.image} alt="" />
                            </div>
                            <div>
                                <h1>{jewellery.name}</h1>
                                <h1>{jewellery.description}</h1>
                            </div>
                        </div>
                        )
                }
            </ul>
        </div>
    );
};

export default AllJewellery;