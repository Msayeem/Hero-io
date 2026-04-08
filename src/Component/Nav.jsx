import React from 'react';
import i1 from '../../images/logo.png'
import { NavLink } from 'react-router';
import { FaGithub } from 'react-icons/fa';

const Nav = () => {
    return (
        <div className='bg-white shadow-2xl'>
        <nav className='py-3  flex items-center justify-between lg:w-[85%] w-[90%] mx-auto'>
            <img className='w-13' src={i1} alt="" />

           <div className='font-semibold flex gap-5'>
            <NavLink className={({isActive})=> `${isActive && 'text-purple-600 underline'}`} to={`/`}>Home</NavLink>
            <NavLink className={({isActive})=> `${isActive && 'text-purple-600 underline'}`} to={`/apps`}>Apps</NavLink>
            <NavLink className={({isActive})=> `${isActive && 'text-purple-600 underline'}`} to={`/installation`}>Installation</NavLink>
            <NavLink className={({isActive})=> `${isActive && 'text-purple-600 underline'}`} to={`/dashboard`}>Dashboard</NavLink>
           </div>

           <button className='bg-purple-500 text-white py-2 px-4 rounded-[8px] font-semibold flex items-center gap-1'><FaGithub></FaGithub> Contribute</button>
        </nav>
        </div>
    );
};

export default Nav;