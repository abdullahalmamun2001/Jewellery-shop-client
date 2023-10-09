import React, { useContext } from 'react';
import { Icon } from '@iconify/react';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const SingleJewellery = ({ jewellery }) => {
    const { name } = jewellery;
    const { price } = jewellery;
    const { image } = jewellery;
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const cartData = { name, price, email, image };
    const handleAddToCart = () => {
        console.log(cartData);


        axios.post('https://demo-theta-sepia.vercel.app/myjewellary', cartData)
            .then(response => {
                console.log('POST Response:', response.data.insertedId);
                if(response.data.insertedId){
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your Jewellery Added to Cart',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <div className='flex'>
            <div>
                <img className='w-72 h-72 rounded-md hover:scale-125 duration-100' src={jewellery.image} alt="" />
            </div>
            <div className='m-10'>
                <h1 className='text-3xl'>{jewellery.name}</h1>
                <h1 className='text-xl text-fuchsia-500 mt-4'>{jewellery.description}</h1>
                <p className='text-xl fw-bold mt-6'>Price : {jewellery.price}$</p>
                <button onClick={handleAddToCart} className='btn bg-fuchsia-700 bottom-0 mt-10 '><Icon className='text-xl' icon="fluent:cart-24-filled" />Add to Cart</button>
            </div>
        </div>
    );
};

export default SingleJewellery;