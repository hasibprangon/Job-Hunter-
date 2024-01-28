import React from 'react';

const JobList = ({job}) => {
    const {logo, name, availableJobs} = job;

    return (
        <div className=' border bg-indigo-200 p-5 text-left rounded-md'>
            <img className=' mr-4' src={logo} alt="" />
            <h3 className=' text-2xl mt-4 font-semibold'>{name}</h3>
            <p><small>{availableJobs} Jobs Available</small></p>
        </div>
    );
};

export default JobList;