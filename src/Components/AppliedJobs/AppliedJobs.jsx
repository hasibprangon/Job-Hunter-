import React from 'react';
import AppliedDetails from './AppliedDetails';


const AppliedJobs = () => {
    const getDataFromLs =  JSON.parse(localStorage.getItem("applied-Jobs")) || []
  
    return (
        <div>
            <h1>your jobs are here</h1>
            {
                getDataFromLs.map(data => <AppliedDetails
                key={data.id}
                data={data}
                ></AppliedDetails>)
            }
        </div>
    );
};

export default AppliedJobs;