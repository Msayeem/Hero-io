import React, { use, useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { AppContext } from './Context';

let fetch1=fetch('/data.json')
.then(x=>x.json());

const Dashboard = () => {
     let datas=use(fetch1);

    let {app}=useContext(AppContext);

    let uninstalledApps=datas.length-app.length;

const data = [
  { name: 'Installed', value: app.length, fill: '#0088FE' },
  { name: 'Uninstalled', value: uninstalledApps, fill: '#00C49F' },
 
];

    return (
        <div className='lg:w-[85%] w-[90%] mx-auto space-y-10 py-10'>
            
            <h1 className='text-center font-semibold text-4xl'>Installed and Uninstalled Apps</h1>

           <div className='flex justify-center'>
              <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      
      <Legend></Legend>
      <Tooltip></Tooltip>
    </PieChart>
           </div>
        </div>
    );
};

export default Dashboard;