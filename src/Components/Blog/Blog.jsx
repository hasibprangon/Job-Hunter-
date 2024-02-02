import React from 'react';
import bgImage1 from '../../assets/assets/images/bg1.png';
import bgImage2 from '../../assets/assets/images/bg2.png';

const Blog = () => {
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
                <h2 className='text-2xl font-semibold my-36'>Welcome to blog page</h2>
            </div>
            <div className='border rounded-md text-left bg-indigo-200 mt-10 p-5'>
                <h2 className='text-2xl font-semibold mt-5 '>1. When should you use context API?</h2>
                <p>
                    <span className='font-semibold'>Answer:</span> Use the React Context API when you need to share data or state between multiple components without prop drilling.
                </p>
                <h2 className='text-2xl font-semibold mt-5 '>2. What is a custom hook?</h2>
                <p>
                    <span className='font-semibold'>Answer:</span> A custom hook in React is a special function that lets you "hook into" React features and state management from functional components. They start with the keyword use and follow specific naming conventions to be recognized by React.
                </p>
                <h2 className='text-2xl font-semibold mt-5 '>3. What is useRef?</h2>
                <p>
                    <span className='font-semibold'>Answer:</span> useRef is a special built-in hook in React that allows you to access and directly manipulate elements in the DOM. Unlike state variables managed by useState, values held by useRef persist between component re-renders without causing the component to re-render itself
                </p>
                <h2 className='text-2xl font-semibold mt-5 '>4. What is useMemo?</h2>
                <p>
                    <span className='font-semibold'>Answer:</span>
                    In React, useMemo is like a cheat code for performance optimization!  It helps prevent unnecessary calculations and re-renders in your components.
                </p>
            </div>
        </div>
    );
};

export default Blog;