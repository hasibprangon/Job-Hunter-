import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
const FeaturedJobsLists = ({ job }) => {
    const { logo, jobTitle, companyName, remoteOrOnsite, location, fulltimeOrPartTime, salary } = job;
    return (
        <div className=' border bg-indigo-200 p-5 text-left rounded-md flex flex-col h-full'>
            <div className='flex-grow'>
                <img className=' w-44' src={logo} alt="" />

                <h3 className=' text-2xl font-bold mt-4'>{jobTitle}</h3>

                <p className=' font-semibold text-2xl mb-3'><small>{companyName}</small></p>

                <span className='border rounded-md border-indigo-400 font-semibold text-indigo-400 px-2 py-1'>{remoteOrOnsite}</span>

                <span className='border rounded-md border-indigo-400 font-semibold text-indigo-400 px-2 py-1 mx-1'>{fulltimeOrPartTime}</span>

                <p className='mt-3 font-semibold flex items-center'><MapPinIcon className="h-4 w-4" /><span className='mr-2'>{location}</span>

                    <span className='flex items-center mr-3'> <CurrencyDollarIcon className='h-4 w-4'></CurrencyDollarIcon> Salary:{salary}</span>
                </p>
            </div>

            <div className="mt-auto">
                <button className=' bg-indigo-500 rounded-md hover:bg-indigo-700 px-5 py-3 text-white'>Viewe Details</button>
            </div>
        </div>
    );
};

export default FeaturedJobsLists;