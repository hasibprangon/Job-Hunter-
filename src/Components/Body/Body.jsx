import React from 'react';
import User from '../../assets/assets/images/user.png'
import './Body.css'
const Body = () => {
    return (
        <div className='body-section container mx-auto md:flex md:items-center md:justify-between'>
            <div className='md:w-1/2'>
                <h1 className='text-4xl md:text-6xl font-semibold text-left mb-4 md:mb-0'>One Step Closer To Your <span className='text-indigo-500'>Dream Job</span></h1>
                <p className='text-left mt-3 md:max-w-lg'><small>Explore thousands of job opportunities with all the information you need. It's your future. Come find it. Manage all your job applications from start to finish.</small></p>
                <div className='flex items-start mt-3 '>
                    <button className='bg-indigo-500 rounded-md hover:bg-indigo-700 px-5 py-3 text-white'>Get Started</button>
                </div>
            </div>
            <img className='userImg mt-10 md:mt-0 md:w-1/2' src={User} alt="" />
        </div>
    );
};

export default Body;