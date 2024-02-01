import React from 'react';
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
    return (
        <div>
            <h1>Assignments mark 1-8</h1>
            <div>
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