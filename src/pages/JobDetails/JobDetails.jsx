import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {

    const {title,company,location,description} = useLoaderData();
  
    return (
        <div>
            <h2 className='text-4xl'>Job Title : {title}</h2>
            <p className='text-base'>{description}</p>
        </div>
    );
};

export default JobDetails;