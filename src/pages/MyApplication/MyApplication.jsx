import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyApplication = () => {
    const { user } = useAuth(); 
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/job_application?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setJobs(data);
                })
                .catch((error) => {
                    console.error('Error fetching jobs:', error);
                });
        }
    }, [user?.email]); // Add user.email to dependencies

    return (
        <div>
            <h2 className='text-3xl'>My Application: {jobs.length} jobs found</h2>
        </div>
    );
};

export default MyApplication;
