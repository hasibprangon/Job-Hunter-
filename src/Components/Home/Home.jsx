import React from 'react';
import Body from '../Body/Body';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <Body></Body>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;