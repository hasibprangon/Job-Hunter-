import React from 'react';
import User from '../../../public/user.png'
const Body = () => {
    return (
        <div className=' container flex items-center justify-between mx-auto'>
            <div>
                <h1 className=' text-6xl font-semibold'>One Step Closer To Your <span className=' text-indigo-500'> Dream Job</span></h1>
                <p><small>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</small></p>
                <button>Get Started</button>
            </div>
            <img className=' h-96 mt-10' src={User} alt="" />
        </div>
    );
};

export default Body;