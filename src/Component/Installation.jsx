import React, { useContext } from 'react';
import { AppContext } from './Context';
import { FiDownload } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Installation = () => {

let {app, setApp}=useContext(AppContext);

const handleUninstall=(apps)=>{

const restApps=app.filter(appy=> appy.id!=apps.id);
setApp(restApps);
toast.info('Uninstall Successful')

}

    return (
        <div className='lg:w-[85%] w-[90%] mx-auto py-10'>
          {
            app.length==0 ? <h1 className='text-center font-semibold text-3xl'>No Apps</h1> :
            app.map((apps, index)=>
            <div className='flex justify-between items-center' key={index}>

<div className='flex items-center gap-8'>
    <img className='w-20' src={apps.image} alt="" />

    <div>
        <h2 className='text-2xl font-medium'>{apps.title}</h2>
        <div className='flex items-center gap-5'>
            <span className='gap-1 flex items-center text-green-500 font-semibold'><FiDownload></FiDownload>{apps.downloads}</span>
                            <span className='flex items-center gap-1 font-semibold text-amber-500'><FaStar></FaStar> {apps.ratingAvg}</span>
        </div>
    </div>
</div>

<button onClick={()=>handleUninstall(apps)} className='font-medium bg-green-600 text-white py-2 px-3 rounded'>Uninstall</button>
            </div>
            )
          }
        </div>
    );
};

export default Installation;