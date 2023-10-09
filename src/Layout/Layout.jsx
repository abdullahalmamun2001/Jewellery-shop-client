import React from 'react';
import Home from '../components/Pages/Home/Home';
import Footer from '../components/Shared/Footer/Footer';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../components/Shared/Navbar/Navbar';

const Layout = () => {
    const location = useLocation();
    
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register') || location.pathname.includes('addJewellery');
    return (
        // <div>
        //     <Navbar></Navbar>
        //     <Outlet></Outlet>
        //     <Footer></Footer>
        // </div>
        <div>
        { noHeaderFooter || <Navbar></Navbar>}
        <Outlet></Outlet>
        { noHeaderFooter || <Footer></Footer>}
    </div>

    );
};

export default Layout;