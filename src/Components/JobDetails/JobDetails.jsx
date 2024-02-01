import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { CurrencyDollarIcon, BriefcaseIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import toast, { Toaster } from 'react-hot-toast';
import bgImage1 from '../../assets/assets/images/bg1.png'
import bgImage2 from '../../assets/assets/images/bg2.png'


const JobDetails = () => {

    const info = useLoaderData();
    const { id, jobDescription, jobResponsibility, educationalRequirements, experiences, salary, jobTitle, contactInformation, location } = info;


    const handleApplyNow = () => {
        const appliedJobs = JSON.parse(localStorage.getItem("applied-Jobs")) || []
        appliedJobs.push(info);
        localStorage.setItem("applied-Jobs", JSON.stringify(appliedJobs));
        toast.success('You successfully applied to the job')
    }

    const backgroundStyle = {
        backgroundImage: `url(${bgImage1}), url(${bgImage2})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '25%, 25%',
        backgroundPosition: 'left, right',
        height: '200px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '-100px'
    };

    return (
        <div>
            <div style={backgroundStyle}>
                <h2 className='text-2xl font-semibold my-36'>Job Details</h2>
            </div>
            <div className='grid grid-cols-2 gap-48 mt-28'>
                <div className=' text-left'>
                    <p className=' mb-6'><span className=' font-semibold'>Job Description:</span> <br />{jobDescription}</p>
                    <p className=' mb-6'><span className=' font-semibold'>Job Responsibility:</span> <br />{jobResponsibility}</p>
                    <p className=' mb-6'><span className=' font-semibold'>Educational Requirements:</span> <br />{educationalRequirements}</p>
                    <p className=' mb-6'><span className=' font-semibold'>Experiences:</span> <br />{experiences}</p>
                </div>
                <div className=' bg-indigo-300 ml-36 text-left px-8 flex flex-col h-full'>
                    <h3 className='font-semibold mb-4 mt-4'>Job Details</h3>
                    <hr className='mb-4' />
                    <p className='flex items-center mr-3 mb-3'><CurrencyDollarIcon className='h-4 w-4'></CurrencyDollarIcon><span className='font-semibold'>Salary:</span> {salary}</p>
                    <p className='flex items-center mr-3 mb-4'><BriefcaseIcon className='h-4 w-4'></BriefcaseIcon> <span className='font-semibold'>Job-Title:</span>{jobTitle}</p>
                    <hr className='mb-4' />
                    <p className='flex items-center mr-3 mb-3'><PhoneIcon className='h-4 w-4'></PhoneIcon><span className='font-semibold'>Phone:</span>{contactInformation.phone}</p>
                    <p className='flex items-center mr-3 mb-3'><EnvelopeIcon className='h-4 w-4'></EnvelopeIcon> <span className='font-semibold'>Email:</span>{contactInformation.email}</p>
                    <p className='flex items-center mr-3 mb-6'><MapPinIcon className='h-4 w-4'></MapPinIcon> <span className='font-semibold'>Address:</span>{location}</p>
                    <div className="mt-auto mx-auto" >
                        <button onClick={() => handleApplyNow()} className=' bg-indigo-500 rounded-md hover:bg-indigo-700 px-5 py-3 text-white mb-6'>Apply Now</button>
                        <Toaster></Toaster>
                    </div>
                </div>
            </div>



        </div>


    );
};

export default JobDetails;