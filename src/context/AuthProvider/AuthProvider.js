import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth,  onAuthStateChanged,  signInWithEmailAndPassword,  signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signupWithGoogle = googleProvider =>{
        return signInWithPopup(auth, googleProvider )
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
       const unsubscrib =  onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
        })
        return ()=>unsubscrib
    },[])

  
    const value = {user, signupWithGoogle,logOut,createUser,signInUser}
    return (
        
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;