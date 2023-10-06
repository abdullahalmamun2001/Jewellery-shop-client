import React, { createContext, useEffect, useState } from 'react';
import { app } from '../../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext=createContext(null);


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const auth=getAuth(app)

    const provider= new GoogleAuthProvider()


    const createUSer=(email,password)=>{
        setLoading(true);
        createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(true);
        signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn=()=>{
        setLoading(true)
        signInWithPopup(auth,provider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
 
        });
        return () => {
            return unsubscribe();
        }
    }, []);

    const authInfo={
        user,
        loading,
        createUSer,
        signIn,
        googleSignIn,
        logOut
    }
    return (


        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;