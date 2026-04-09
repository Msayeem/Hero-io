import React from 'react';
import i3 from '../../images/logo.png';
import { FaFacebook, FaSquareXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#001931] py-10'>
            <footer className='lg:w-[85%] w-[90%] mx-auto'>
                {/* Changed 'flex-row' to 'flex-col' by default (mobile).
                  Added 'sm:flex-row' to switch back to a row on larger screens.
                  Added 'items-center' and 'text-center' for mobile elegance.
                */}
                <div className='flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-0'>
                    
                    {/* Logo Section */}
                    <div className='flex items-center gap-3'>
                        <img className='w-10' src={i3} alt="Logo" />
                        <h1 className='font-medium text-white text-xl'>HERO.IO</h1>
                    </div>

                    {/* Social Links Section */}
                    <div className='space-y-3 flex flex-col items-center sm:items-end'>
                        <h2 className='text-white font-semibold'>Social Links</h2>
                        <div className='text-white flex items-center gap-5 text-2xl'>
                            <a href="#" className="hover:text-blue-400 transition-colors"><FaSquareXTwitter /></a>
                            <a href="#" className="hover:text-blue-600 transition-colors"><FaLinkedin /></a>
                            <a href="#" className="hover:text-blue-500 transition-colors"><FaFacebook /></a>
                        </div>
                    </div>
                </div>

                <hr className='border-gray-600 my-6' />

                <p className='text-gray-400 text-sm text-center'>
                    Copyright © {new Date().getFullYear()} - All rights reserved
                </p>
            </footer>
        </div>
    );
};

export default Footer;