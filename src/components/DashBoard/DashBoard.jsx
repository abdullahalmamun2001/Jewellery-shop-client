import React from 'react';
import useAdminSecure from '../../hooks/UseAdminSecure';

const DashBoard = () => {
    const [isAdmin, isAdminLoading] = useAdminSecure();
    
    isAdmin && 
    <>
        <li>this is admin dashboard</li>
    </>
    return (
        <div>

        </div>
    );
};

export default DashBoard;