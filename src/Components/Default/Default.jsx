import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Body from '../Body/Body';

const Default = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Default;