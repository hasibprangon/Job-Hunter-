import React, { useEffect, useState } from 'react';
import logo1 from '../../assets/assets/logo/google.png';
import logo2 from '../../assets/assets/logo/tesla.png';
import logo3 from '../../assets/assets/logo/netflix.png';
import logo4 from '../../assets/assets/logo/amazon-removebg-preview.png';
import logo5 from '../../assets/assets/logo/samsung-removebg-preview.png';
import logo6 from '../../assets/assets/logo/SpaceX.png';
import FeaturedJobsLists from '../FeaturedJobsLists/FeaturedJobsLists';

const companeyLogo = [logo1, logo2, logo3, logo4, logo5, logo6];

const FeaturedJobs = () => {
    const [fJobs, setFJobs] = useState([]);

    useEffect(() => {
        fetch('FeaturedJobsLists.json')
            .then(res => res.json())
            .then(data => setFJobs(data))
    }, []);

    const jobAndCompaneyLogo = fJobs.map((job, index) => ({
        ...job, logo: companeyLogo[index]
    }));

    return (
        <div>
            <h1 className='text-5xl font-bold mt-28 mb-3'>Featured Jobs</h1>
            <p><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
            <div className=' grid grid-cols-2 gap-4 mt-3'>
                {
                    jobAndCompaneyLogo.map(job => <FeaturedJobsLists
                        key={job.id}
                        job={job}
                    ></FeaturedJobsLists>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;