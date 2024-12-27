import React from 'react';
import { useParams } from 'react-router-dom';

const JobApply = () => {


    const {id} = useParams()
    console.log(id)

    const submitHadleJobApplication = e => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        console.log(linkedin,github,resume)
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Job apply!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
        </div>
    );
};

export default JobApply;