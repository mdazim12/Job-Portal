import React, { useContext } from 'react';
import AuthContext from '../../../context/AuthContext/AuthContext';
import google from '../../../assets/loitte/google.png'

const SoicalLogin = () => {

    const { googleLogin } = useContext(AuthContext);

    const handleGoogeLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
            })
            .catch(eroor => {
                console.log(eroor.message)
            })
    }

    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={handleGoogeLogin}>
                <div  className='flex gap-5 items-center justify-center p-3 rounded-xl text-center border-2 m-5'>
                    <img className='w-24' src={google} alt="" />
                    <h4 className='text-2xl font-bold '>Google Login</h4>
                </div>
            </button>
        </div>
    );
};

export default SoicalLogin;