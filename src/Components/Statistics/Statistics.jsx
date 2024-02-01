import React from 'react';
import bgImage1 from '../../assets/assets/images/bg1.png'
import bgImage2 from '../../assets/assets/images/bg2.png'
import {
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,

} from 'recharts';

const Statistics = () => {
  const assignmentData = [
    {
      name: "Assignment-1",
      marks: 60,
    },
    {
      name: "Assignment-2",
      marks: 55,
    },
    {
      name: "Assignment-3",
      marks: 60,
    },
    {
      name: "Assignment-4",
      marks: 57,
    },
    {
      name: "Assignment-5",
      marks: 27,
    },
    {
      name: "Assignment-6",
      marks: 28,
    },
    {
      name: "Assignment-7",
      marks: 20,
    },
    {
      name: "Assignment-8",
      marks: 30,
    },
  ];

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
        <h2 className='text-2xl font-semibold my-36'>Assignments mark 1-8</h2>
      </div>
      <div className='mt-28'>
        <ComposedChart width={1200} height={500} data={assignmentData}>
          <Area dataKey="marks"></Area>
          <XAxis dataKey="name" ></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </ComposedChart>

      </div>
    </div>
  );
};

export default Statistics;