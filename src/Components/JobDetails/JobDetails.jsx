import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {

    const info = useLoaderData();
    const { id, jobDescription, jobResponsibility, educationalRequirements, experiences, salary, jobTitle, contactInformation } = info;
    console.log(info);
    return (
        <div>
            <h2>Job Details:{id}</h2>
            <div>
                <div>
                    <p><span>Job Description:</span>{jobDescription}</p>
                    <p><span>Job Responsibility:</span>{jobResponsibility}</p>
                    <p><span>Educational Requirements:</span>{educationalRequirements}</p>
                    <p><span>Experiences:</span>{experiences}</p>
                </div>
                <div>
                    <h3>Job Details</h3>
                    <hr />
                    <p>{salary}</p>
                    <p>{jobTitle}</p>
                    <hr />
                    <p>{contactInformation.phone}</p>
                    <p>{contactInformation.email}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    );
};

export default JobDetails;