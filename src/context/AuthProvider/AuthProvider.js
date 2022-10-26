import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [loding, setLoding] = useState(true)
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signupWithGoogle = googleProvider => {
        setLoding(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        setLoding(true)
        return signOut(auth)
    }
    const updateUserProfil = profil => {
        return updateProfile(auth.currentUser, profil)
    }
    const emailVarifacition = () =>{
        return sendEmailVerification(auth.currentUser)
    }
    useEffect(() => {
        const unsubscrib = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser === null || currentUser.emailVerified){
                setLoding(false)
                setUser(currentUser)
            }
        })
        return () => unsubscrib
    }, [])


    const value = {
        user,
        signupWithGoogle,
        logOut, 
        createUser,
        signInUser,
        loding,
        updateUserProfil,
        emailVarifacition,
        setLoding
    }
    return (

        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;