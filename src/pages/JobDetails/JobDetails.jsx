import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {

    const {_id,title,company,location,description} = useLoaderData();
  
    return (
        <div>
            <h2 className='text-4xl'>Job Title : {title}</h2>
            <p className='text-base'>{description}</p>

          
          <Link to={`/JobsApply/${_id}`}>
          
          <button className='btn my-2 btn-primary' >Apply Job</button>
          </Link>

        </div>
    );
};

export default JobDetails;