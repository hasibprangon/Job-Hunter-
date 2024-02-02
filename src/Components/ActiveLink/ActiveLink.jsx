import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActiveLink.css'

const ActiveLink = ({ to, children }) => {
    return (
        <div className='mr-12 my-3  p-1'>
            <NavLink
                to={to}
                className={({ isActive }) => isActive ? 'active' : ""}
            >
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveLink;