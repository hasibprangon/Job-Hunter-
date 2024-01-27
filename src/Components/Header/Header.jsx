import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className='container mx-auto flex items-center justify-between'>
                <h1 className=' text-3xl  font-bold'>Job-Hunter</h1>
                <div className='flex gap-4'>
                    <Link to='/'>Home</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/appliedJobs'>Applied Jobs</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
                <button className=' border rounded-lg px-5 py-3 bg-blue-500 hover:bg-blue-700 text-white'>Start Apply</button>
            </div>
        </nav>
    );
};

export default Header;