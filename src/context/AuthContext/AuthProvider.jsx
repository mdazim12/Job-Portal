import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";


const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser] = useState();
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser = () => {
        setLoading(true)
      return  signOut(auth)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    },[])

    const AuthInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        googleLogin
    }

    return (
        <AuthContext.Provider value = {AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;