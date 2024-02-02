import React from 'react';

const JobList = ({job}) => {
    const {logo, name, availableJobs} = job;

    return (
        <div className='border bg-indigo-200 p-5 text-left rounded-md mb-4'>
            <img className='w-16 md:w-20 h-16 md:h-20 mx-auto mb-4' src={logo} alt="" />
            <h3 className='text-xl md:text-2xl font-semibold'>{name}</h3>
            <p className='mt-2 text-sm'><small>{availableJobs} Jobs Available</small></p>
        </div>
    );
};

export default JobList;