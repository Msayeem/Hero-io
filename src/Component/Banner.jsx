import React from 'react';
import i2 from '../../images/hero.png'

const Banner = () => {
    return (
        <div>
            <div className='space-y-10 py-10 lg:w-[85%] w-[90%] mx-auto'>
            
<div className='text-center space-y-4'>
    <h1 className='font-bold text-5xl'>We Build <br />
Productive Apps</h1>

<p className='font-medium'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

<div><button>Google Play</button>
<button>App Store</button></div>
</div>

<div>
    <img className='mx-auto' src={i2} alt="" />
</div>

        </div>

<div>
    
</div>

        </div>
    );
};

export default Banner;