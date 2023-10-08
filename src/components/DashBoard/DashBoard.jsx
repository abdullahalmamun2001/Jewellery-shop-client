import React from 'react';
import useAdminSecure from '../../hooks/UseAdminSecure';

const DashBoard = () => {
    const [isAdmin,isAdminLoading]=useAdminSecure();
    console.log();
    return (
        <div>
            
        </div>
    );
};

export default DashBoard;