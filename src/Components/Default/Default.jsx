import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

const Default = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Default;