import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Default from './Components/Default/Default.jsx'
import Statistics from './Components/Statistics/Statistics.jsx'
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx'
import Blog from './Components/Blog/Blog.jsx'
import Home from './Components/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<Default></Default>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'appliedJobs',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
