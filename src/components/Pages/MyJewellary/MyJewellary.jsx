import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyJewellary = () => {

  const { user } = useContext(AuthContext)

  const [data, setData] = useState([]);
  useEffect(() => {
    // Perform the Axios GET request to fetch data
    axios.get(`https://demo-theta-sepia.vercel.app/myjewellary/${user?.email}`)
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [user]);

  const handleDelete = (id) => {
    console.log(id);

    axios.delete(`https://demo-theta-sepia.vercel.app/myjewellarydelete/${id}`)
      .then(res => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Remove The Item Of Your Cart',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })

  }


  return (
    <div>

      <div className="overflow-x-auto w-10/12 mx-auto">
        <table className="table md:w-11/12 mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((singleData, index) => <tr key={singleData._id}>
                <th>{index + 1}</th>
                <td><img className='h-10 w-10 rounded-full' src={singleData.image} alt="" /></td>
                <td>{singleData.name}</td>
                <td>{singleData.price}$</td>
                <td onClick={() => { handleDelete(singleData._id) }} className='btn btn-primary'>Delete</td>
              </tr>)
            }


          </tbody>
        </table>
      </div>
      {/* {
               
            } */}
    </div>
  );
};

export default MyJewellary;