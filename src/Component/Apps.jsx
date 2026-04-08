import React, { use } from 'react';
import AppsData from './AppsData';

let fetch1=fetch('/data.json')
.then(x=>x.json());

const Apps = () => {

    let datas=use(fetch1);

    return (
        <div className='lg:w-[85%] w-[90%] mx-auto text-center py-10'>
            
            <div className='space-y-2'>
    <h2 className='font-bold text-3xl'>Our All Applications</h2>
    <p className='font-medium'>Explore All Apps on the Market developed by us. We code for Millions</p>
</div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10 gap-y-5 gap-x-8'>
    {
        datas.map(data=>
            
                <AppsData key={data.id} data={data}></AppsData>
           
        )
    }
</div>
        </div>
    );
};

export default Apps;