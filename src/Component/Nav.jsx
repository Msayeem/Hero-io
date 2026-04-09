import React, { useState } from 'react';
import i1 from '../../images/logo.png';
import { NavLink } from 'react-router';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa'; // Added icons for the menu

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Apps', path: '/apps' },
        { name: 'Installation', path: '/installation' },
        { name: 'Dashboard', path: '/dashboard' },
    ];

    const linkStyles = ({ isActive }) => 
        `${isActive ? 'text-purple-600 underline' : 'text-gray-700'} hover:text-purple-500 transition-colors`;

    return (
        <div className='bg-white shadow-md sticky top-0 z-50'>
            <nav className='py-3 flex items-center justify-between lg:w-[85%] w-[90%] mx-auto'>
                {/* Logo */}
                <img className='w-12' src={i1} alt="Logo" />

                {/* Desktop Links - Hidden on mobile, flex on large screens */}
                <div className='hidden md:flex gap-8 font-semibold'>
                    {navLinks.map((link) => (
                        <NavLink key={link.name} className={linkStyles} to={link.path}>
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Right Side Action Button (Desktop) */}
                <div className='hidden md:block'>
                    <button className='bg-purple-600 hover:bg-purple-700 text-white py-2 px-5 rounded-lg font-semibold flex items-center gap-2 transition-all'>
                        <FaGithub /> Contribute
                    </button>
                </div>

                {/* Mobile Menu Button - Visible only on small screens */}
                <div className='md:hidden flex items-center'>
                    <button onClick={toggleMenu} className='text-2xl text-purple-600 focus:outline-none'>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>

            {/* Mobile Sidebar/Dropdown */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 border-t' : 'max-h-0'}`}>
                <div className='flex flex-col items-center gap-4 py-6 font-semibold bg-gray-50'>
                    {navLinks.map((link) => (
                        <NavLink key={link.name} onClick={() => setIsOpen(false)} className={linkStyles} to={link.path}>
                            {link.name}
                        </NavLink>
                    ))}
                    <button className='mt-2 bg-purple-600 text-white py-2 px-6 rounded-lg font-semibold flex items-center gap-2'>
                        <FaGithub /> Contribute
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Nav;