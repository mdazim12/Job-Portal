import React from 'react';
import Lottie from "lottie-react";
import LottieRegiterData from './../../assets/loitte/register.json'

const Register = () => {

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Email validation: At least 6 characters, one uppercase, one lowercase, and one number
    const emailPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    if (!emailPattern.test(email)) {
        console.error("Email must be at least 6 characters, include one uppercase letter, one lowercase letter, and one number.");
        return;
    }

    console.log(email, password);
};


    return (
        <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left lg:w-[400px]">
          
          

            <Lottie className='' animationData = {LottieRegiterData}> </Lottie>

          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold p-5 text-center">Register now!</h1>

            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;