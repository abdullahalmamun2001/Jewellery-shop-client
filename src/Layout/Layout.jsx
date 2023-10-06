import React from 'react';
import Home from '../components/Pages/Home/Home';
import Footer from '../components/Shared/Footer/Footer';
import { Outlet } from 'react-router';
import Navbar from '../components/Shared/Navbar/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;