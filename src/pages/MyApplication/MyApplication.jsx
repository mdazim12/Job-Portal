import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { map } from 'motion/react-client';

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
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map(job => 
                                <tr key={job.id}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={job.company_logo}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{job.title}</div>
                                                <div className="text-sm opacity-50"> {job.location} </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Zemlak, Daniel and Leannon
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>)
                        }
                        
                        
                       
                    </tbody>
                    {/* foot */}
                   
                </table>
            </div>
        </div>
    );
};

export default MyApplication;
