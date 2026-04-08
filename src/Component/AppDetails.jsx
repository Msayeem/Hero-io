import React, { use, useContext } from 'react';
import { data, useParams } from 'react-router';
import { AppContext } from './Context';
import { toast } from 'react-toastify';

let fetch1=fetch('/data.json')
.then(x=>x.json());

const AppDetails = () => {
    let {app, setApp}=useContext(AppContext);

     let datas=use(fetch1);

    const {id}=useParams();
    
    let expectedApp=datas.find(data=>data.id==id);

const handleClick=()=>{
    if(app.some(app=>app.id==expectedApp.id)){
        toast.error('App already added to Installation');
        return
    }
    else{
        setApp([...app, expectedApp]);
        toast.success('App added to Installation!')
    }
}

    return (
        <div className='py-20 lg:w-[85%] w-[90%] mx-auto gap-10 justify-center flex items-center'>
            <img className='md:w-50 w-40' src={expectedApp.image} alt="" />
            
<div>
    <h2 className='text-2xl font-semibold'>{expectedApp.title}</h2>
            <p className='font-medium text-gray-500'>Developed by: {expectedApp.companyName}</p>
            <hr className='my-3' />
            <button onClick={handleClick} className='px-3 text-white rounded py-2 font-medium bg-purple-600'>Install Now</button>
</div>

        </div>
    );
};

export default AppDetails;