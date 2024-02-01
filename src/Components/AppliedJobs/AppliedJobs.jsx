import React from 'react';
import AppliedDetails from './AppliedDetails';
import bgImage1 from '../../assets/assets/images/bg1.png'
import bgImage2 from '../../assets/assets/images/bg2.png'

const AppliedJobs = () => {
    const getDataFromLs = JSON.parse(localStorage.getItem("applied-Jobs")) || [];
    let message;
    if(getDataFromLs.length ===0){
        message = <p>You have not applied any job yet</p>
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
                <h2 className='text-2xl font-semibold my-36'>Applied Jobs</h2>
            </div>
            <div className=' mt-16 mb-6'>
                {message}
                {
                    getDataFromLs.map(data => <AppliedDetails
                        key={data.id}
                        data={data}
                    ></AppliedDetails>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;