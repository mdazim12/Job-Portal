import React from 'react';
import { LuMapPin } from "react-icons/lu";
import { Link } from 'react-router-dom';


const HotJobCard = ({ job }) => {

     const {_id,company_logo ,title,company,location,description,requirements,salaryRange} = job;

    console.log(job)
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
            
           <div className='flex gap-2 p-4'>
           <figure>
                <img className='w-16'
                    src={company_logo}
                    alt="Shoes" />
            </figure>

                <div>
                    <h2 className="text-lg font-medium" >{company}</h2>
                    <p className='flex items-center gap-2'> <LuMapPin />
                    {location}</p>
                </div>
           </div>

            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className='flex flex-wrap gap-2'>
                    {
                        requirements.map(Skill => <p className='bg-gray-100 text-center p-1 rounded-md hover:text-blue-500'>{Skill} </p>)
                    }
                </div>
                <div className="card-actions items-center my-3">
                    <div className='float-left text-left'>
                        <h2 className='text-left float-left text-lg'> 
                            Salary :{salaryRange.min} - {salaryRange.max} {salaryRange.currency}
                        </h2>
                    </div>
                    <Link to={`jobs/${_id}`}>
                    <button className="btn btn-primary">Apply </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;