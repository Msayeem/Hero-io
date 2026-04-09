import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router';
import Footer from './Footer';

const Root = () => {
    return (
        /* min-h-screen ensures the page is always at least the full height of the window */
        /* flex flex-col allows the middle part to expand */
        <div className='flex flex-col min-h-screen'>
            <Nav />
            
            {/* flex-grow tells the content to take up all remaining space, pushing the footer down */}
            <div className='flex-grow'>
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Root;