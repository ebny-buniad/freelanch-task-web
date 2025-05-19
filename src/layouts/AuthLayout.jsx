import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const AuthLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h-[calc(100vh-601px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;