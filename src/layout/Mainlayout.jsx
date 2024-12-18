import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';

const Mainlayout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;