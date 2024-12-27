import React, { useContext, useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';
import AuthContext from '../../context/AuthContext/AuthContext';

const HotJobs = () => {

    const [jobs, setJobs] = useState([]);
   

   

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job => <HotJobCard job = {job}></HotJobCard>)
                }
            </div>
            
        </div>
    );
};

export default HotJobs;