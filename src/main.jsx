import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter } from "react-router";
import { createBrowserRouter, Link } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Component/Root.jsx';
import Apps from './Component/Apps.jsx';
import Installation from './Component/Installation.jsx';
import Dashboard from './Component/Dashboard.jsx';
import Home from './Component/Home.jsx';
import AppDetails from './Component/AppDetails.jsx';
import Context from './Component/Context.jsx';
import { ToastContainer } from 'react-toastify';

const router=createHashRouter([
  {
    path:'/',
    Component:Root, 
    children:[
      {
index:true,
Component:Home
      },
{
  path:'/apps',
  Component:Apps
},
{
  path:'/installation',
  Component:Installation
},
{
  path:'/dashboard',
  Component:Dashboard
},
{
  path:'/apps/:id',
  Component:AppDetails
}

    ],
    errorElement:<div className='space-y-8 text-center my-5'>
      <h2 className='font-semibold text-4xl'>This page is not found</h2>
   <Link className='py-2 rounded px-3 bg-blue-600 font-semibold text-white' to={`/`}>Go Home</Link>
    </div>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </Context>
  </StrictMode>,
)
