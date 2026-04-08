import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { FiDownload } from 'react-icons/fi';
import { Link } from 'react-router';

const AppsData = ({data}) => {
    return (
       <Link to={`/apps/${data.id}`}>
        <div className=' space-y-3'>
            <img className='w-40 mx-auto' src={data.image} alt="" />
            <h3 className='font-medium'>{data.title}</h3>
            <div className='flex justify-around'>
                <span className='gap-1 flex items-center text-green-500 font-semibold'><FiDownload></FiDownload>{data.downloads}</span>
                <span className='flex items-center gap-1 font-semibold text-amber-500'><FaStar></FaStar> {data.ratingAvg}</span>
            </div>
        </div>
       </Link>
    );
};

export default AppsData;