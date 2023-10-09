import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManagedUser = () => {
    const [users,setUsers]=useState([])
    useEffect(() => {
        // Perform the Axios GET request to fetch data
        axios.get(`https://demo-theta-sepia.vercel.app/user`)
            .then(response => {
                console.log(response.data);
                setUsers(response.data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra text-center w-2/3 mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user=><tr key={user._id}>
                                <th>{1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                            </tr>)
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagedUser;