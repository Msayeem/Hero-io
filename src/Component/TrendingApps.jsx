import React, { Suspense, use } from 'react';
import AppsData from './AppsData';
import { Link } from 'react-router';

let fetch1=fetch('/data.json')
.then(x=>x.json());

const TrendingApps = () => {

let datas=use(fetch1);


    return (
        <div className='lg:w-[85%] w-[90%] mx-auto text-center py-10'>
            
<div className='space-y-2'>
    <h2 className='font-bold text-3xl'>Trending Apps</h2>
    <p className='font-medium'>Explore All Trending Apps on the Market developed by us</p>
</div>

<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10 gap-y-5 gap-x-8'>
    {
        datas.slice(0, 9).map(data=>
            
                <AppsData key={data.id} data={data}></AppsData>
           
        )
    }
</div>

<Link className='font-medium rounded text-white py-2 px-3 bg-purple-600' to={`/apps`}>View All</Link>

        </div>
    );
};

export default TrendingApps;