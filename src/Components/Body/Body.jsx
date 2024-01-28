import React from 'react';
import User from '../../../public/user.png'
import './Body.css'
const Body = () => {
    return (
        <div className='body-section container flex items-center justify-between mx-auto'>
            <div>
                <h1 className=' text-6xl font-semibold text-left'>One Step Closer To Your <span className=' text-indigo-500'> Dream Job</span></h1>
                <p className=' text-left mt-3'><small>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</small></p>
                <div className=' flex items-start mt-3 '>
                <button className=' bg-indigo-500 rounded-md hover:bg-indigo-700 px-5 py-3 text-white'>Get Started</button>
                </div>
            </div>
            <img className='userImg mt-10' src={User} alt="" />
        </div>
    );
};

export default Body;