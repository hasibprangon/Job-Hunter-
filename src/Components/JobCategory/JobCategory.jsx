import React, { useEffect, useState } from 'react';
import JobList from '../JobList/JobList';
import logo1 from '../../assets/assets/icons/accounts.png';
import logo2 from '../../assets/assets/icons/creative.png';
import logo3 from '../../assets/assets/icons/marketing.png';
import logo4 from '../../assets/assets/icons/chip.png';

const JobLogo = [logo1, logo2, logo3, logo4]

const JobCategory = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('JobCategoryLists.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    const JobAndJobLogo = jobs.map((job, index) => ({ ...job, logo: JobLogo[index] }));
    return (
        <div className='container mx-auto'>
            <h1 className='text-3xl md:text-5xl font-bold mt-10 md:mt-28 mb-4'>Job Category List</h1>
            <p className='md:mt-4'><small>Explore thousands of job opportunities with all the information you need. It's your future.</small></p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3'>
                {JobAndJobLogo.map(job => (
                    <JobList key={job.id} job={job}></JobList>
                ))}
            </div>
        </div>
    );
};

export default JobCategory;