import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default MainLayout;