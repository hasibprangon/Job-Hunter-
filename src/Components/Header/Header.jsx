import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className=" p-4">
            <div className="container mx-auto md:flex items-center justify-between">
                <h1 className='text-3xl font-bold '>Job-Hunter</h1>
                <div className='md:hidden cursor-pointer' onClick={() => setOpen(!open)}>
                    <span>{open ? <XMarkIcon className="h-6 w-6 text-blue-500" /> : <Bars3Icon className="h-6 w-6 text-blue-500" />}</span>
                </div>
                <div className='hidden md:flex gap-4 items-center'>
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/statistics'>Statistics</ActiveLink>
                    <ActiveLink to='/appliedJobs'>Applied Jobs</ActiveLink>
                    <ActiveLink to='/blog'>Blog</ActiveLink>
                </div>
                {open && (
                    <div className="md:hidden flex flex-col mt-4 gap-4">
                        <ActiveLink to='/'>Home</ActiveLink>
                        <ActiveLink to='/statistics'>Statistics</ActiveLink>
                        <ActiveLink to='/appliedJobs'>Applied Jobs</ActiveLink>
                        <ActiveLink to='/blog'>Blog</ActiveLink>
                    </div>
                )}
                <button className='border rounded-lg px-5 py-3 bg-blue-500 hover:bg-blue-700 text-white md:ml-4'>Start Apply</button>
            </div>
        </nav>
    );
};

export default Header;
