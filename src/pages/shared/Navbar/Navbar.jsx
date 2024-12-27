import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext/AuthContext';
import logo from './../../../assets/loitte/logo.png'
import avatar from './../../../assets/loitte/user.jpg'


const Navbar = () => {

    const {user, signOutUser} = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
        .then(() => {
            console.log('Successfull Sign Out')
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    const links = <>
        <NavLink className= 'mx-4 text-lg font-medium' to='/'>Home</NavLink>
        <NavLink className= 'mx-4 text-lg font-medium' to='/myApplication'>My Application</NavLink>
        <NavLink className= 'mx-4 text-lg  font-medium'>About</NavLink>
        <NavLink className= 'mx-4 text-lg font-medium'>Contact</NavLink>

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                       {links}
                    </ul>
                </div>
            
             <Link to = '/' className='flex gap-2 items-center'>
             <img className='w-12' src={logo} alt="" /> <h3 className='text-2xl font-bold'>Job Portal</h3>
                
             </Link>

               
                    
                 
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
              
              {
                user ? <>
                     <img className='w-12 mx-5 rounded-full' src={user.photoURL} alt="" />
                </> 
                :
                
                <>
                
                <img className='w-12 mx-5' src={avatar} alt="" />
                </>
              }

                {
                    user ? <>
                        <button onClick={handleSignOut} className='btn'>Log Out</button>
                    </> :

                    <>
                        <Link className='mx-4' to = '/register'>Register</Link>
                        <Link className='mx-4' to = '/signIn'>Sign In</Link>
                    
                    </>
                }
                
                
            </div>
        </div>
    );
};

export default Navbar;