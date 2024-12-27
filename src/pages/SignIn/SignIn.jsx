import Lottie from 'lottie-react';
import LottieLogin from './../../assets/loitte/login.json'
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import SoicalLogin from '../shared/SoicalLogin/SoicalLogin';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {

    const {signInUser} = useContext(AuthContext);
   

    const location = useLocation();

    const navigate = useNavigate();

    const form = location || '/'

   const handleSign = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
        .then((result) => {
            console.log(result.user);
            const redirectPath = location.state?.from?.pathname || '/';
            navigate(redirectPath);
        })
        .catch((error) => {
            console.error(error.message);
        });
};

    return (
        <div className="hero  min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left lg:w-[600px]">



                    <Lottie className='' animationData={LottieLogin}> </Lottie>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold p-5 text-center">Sign In!</h1>

                    <form onSubmit={handleSign} className="card-body">
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

                    <SoicalLogin></SoicalLogin>
                </div>
            </div>
        </div>
    );
};

export default SignIn;