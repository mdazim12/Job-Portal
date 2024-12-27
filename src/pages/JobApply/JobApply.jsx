import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const JobApply = () => {

    const {user} = useAuth();
    const {id} = useParams()
    console.log(id,user)

    const submitHadleJobApplication = e => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        console.log(linkedin,github,resume)

        const jobApplication = {
            job_id:id,
            applicant_email:user.email,
            linkedin,
            github,
            resume
        }
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
          
            
                <div className="card bg-base-100 w-full shadow-2xl">
                <h1 className="text-5xl font-bold text-center my-3">Job apply!</h1>
                    <form onSubmit={submitHadleJobApplication} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Linked In URL</span>
                            </label>
                            <input type="url" placeholder="Linked In " name='linkedin' className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Github In URL</span>
                            </label>
                            <input type="url" placeholder="Github " name='github' className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resume In URL</span>
                            </label>
                            <input type="url" placeholder="resume " name='resume' className="input input-bordered" required />
                        </div>
                       
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sub</button>
                        </div>
                    </form>
                </div>
            </div>
        
    );
};

export default JobApply;