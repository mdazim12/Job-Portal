import React from 'react';

const AddJob = () => {


    const handleAddJob = e => {
        e.preventDefault();
        console.log('form submit')
        const formData = new FormData(e.target)
        // console.log(formData.entries())
        const inititalData = Object.fromEntries(formData.entries())
         console.log(inititalData)
        
         const {min,max,currency, ...newJob} = inititalData;

         newJob.salaryRange = {min,max,currency}
         console.log(newJob)


    }


    return (
        <div>
            <h2 className='text-5xl text-center font-bold mt-5'>Add New Job</h2>

            <div className="card bg-base-100 w-full shadow-2xl">
                <form onSubmit={handleAddJob} className="card-body">

                    {/* Company Title */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <input type="text" name='title' placeholder="title" className="input input-bordered" required />
                    </div>

                    {/* Company Location */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" name='location' placeholder="location" className="input input-bordered" required />
                    </div>


                    <div className='grid grid-cols-1 lg:grid-cols-3'>
                        {/* Job Type */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">job Type</span>
                            </label>
                            <select name='jobType' className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Select job type</option>
                                <option>Full Time</option>
                                <option>Part Time</option>
                                <option>Hybrid</option>
                            </select>
                        </div>


                        {/* Job Category */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">job Category</span>
                            </label>
                            <select name='category' className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Job Category</option>
                                <option>Engineering</option>
                                <option>Marketing</option>
                                <option>Finance</option>
                                <option>Teaching</option>
                                <option>IT</option>
                            </select>
                        </div>

                        {/* Job deadline */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">job Deadline</span>
                            </label>
                            <input className='input input-bordered' type="date" name="applicationDeadline" id="" />
                        </div>

                      


                    </div>





                    <div className='grid grid-cols-3 gap-4'>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Salary Min</span>
                            </label>
                            <input type="text" name='min' placeholder="Minimum Salary" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Salary Max</span>
                            </label>
                            <input type="text" name='max' placeholder="Max Salary" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Salary Max</span>
                            </label>
                            <select name='currency' className="select select-bordered w-full max-w-xs">
                                <option  disabled selected>Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>CAD</option>
                                <option>INR</option>
                                <option>AUD</option>
                            </select>
                        </div>

                    </div>


                    {/* Company Title */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Description</span>
                        </label>
                        <textarea name='description' className="textarea textarea-bordered h-24" placeholder="Job descrition"></textarea>

                    </div>

                      {/* Job deadline */}
                      <div className="form-control">
                            <label className="label">
                                <span className="label-text">Company Name</span>
                            </label>
                            <input className='input input-bordered' placeholder='Company Name' type="text" name="company" id="" />
                        </div>


                         {/* Company Title */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Requiernmnets </span>
                        </label>
                        <textarea name='requirements' className="textarea textarea-bordered h-24" placeholder="Make a one line for one requirments"></textarea>

                    </div>  


                         {/* Company Title */}
                         <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Responsivility </span>
                        </label>
                        <textarea name='responsibilities' className="textarea textarea-bordered h-24" placeholder="Make a one line for one requirments"></textarea>

                    </div>  


                     {/* HR Name */}
                     <div className="form-control">
                            <label className="label">
                                <span className="label-text">Hr Name</span>
                            </label>
                            <input className='input input-bordered' placeholder='Company Name' type="text" name="hr_name" id="" />
                        </div>



                         {/* Hr Eemail */}
                      <div className="form-control">
                            <label className="label">
                                <span className="label-text">HR Email</span>
                            </label>
                            <input  className='input input-bordered' placeholder='Company Name' type="text" name="hr_email" id="" />
                        </div>

                          {/* Hr Eemail */}
                      <div className="form-control">
                            <label className="label">
                                <span className="label-text">Compmay Logo URL</span>
                            </label>
                            <input className='input input-bordered' placeholder='Company Name' type="text" name="company_logo" id="" />
                        </div>






                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddJob;