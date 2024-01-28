import React, { useEffect, useState } from 'react';
import logo1 from '../../assets/assets/logo/google.png';
import logo2 from '../../assets/assets/logo/tesla.png';
import logo3 from '../../assets/assets/logo/netflix.png;'
import logo4 from '../../assets/assets/logo/amazon.png';
import logo5 from '../../assets/assets/logo/samsung.png';
import logo6 from '../../assets/assets/logo/SpaceX.png';

const companeyLogo = [logo1, logo2, logo3, logo4, logo5, logo6];

const FeaturedJobs = () => {
    const [fJobs, setFJobs] = useState([]);

    useEffect(() => {
        fetch('FeaturedJobsLists.json')
            .then(res => res.json())
            .then(data => setFJobs(data))
    }, []);

    const jobAndCompaneyLogo = fJobs.map((job, index) =>({
        ...job, logo:companeyLogo[index]
    }));

    return (
        <div>

        </div>
    );
};

export default FeaturedJobs;