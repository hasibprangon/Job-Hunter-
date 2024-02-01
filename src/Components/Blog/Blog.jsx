import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>1. When should you use context API?</h2>
            <p>
                Answer: Use the React Context API when you need to share data or state between multiple components without prop drilling.
            </p>
            <h2>2. What is a custom hook?</h2>
            <p>
                Answer: A custom hook in React is a special function that lets you "hook into" React features and state management from functional components. They start with the keyword use and follow specific naming conventions to be recognized by React.
            </p>
            <h2>3. What is useRef?</h2>
            <p>
                Answer: useRef is a special built-in hook in React that allows you to access and directly manipulate elements in the DOM. Unlike state variables managed by useState, values held by useRef persist between component re-renders without causing the component to re-render itself
            </p>
            <h2>4. What is useMemo?</h2>
            <p>
                Answer:
                In React, useMemo is like a cheat code for performance optimization!  It helps prevent unnecessary calculations and re-renders in your components.
            </p>
        </div>
    );
};

export default Blog;