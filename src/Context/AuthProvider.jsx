import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { auth } from '../../firebase.init';


const AuthProvider = ({ children }) => {

    const [googleUser, setGoogleUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google Sign Up and Sign in
    const provider = new GoogleAuthProvider();
    const signUpWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    // Get Current Login User --
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {

            setGoogleUser(user);

            return () => {
                unsubscribe();
            }
        })

    }, [])

    // Logout Current User
    const logOut = () => {
        return signOut(auth)
    }


    const [regUser, setRegUser] = useState(null)
    // console.log(regUser)




    const contextValus = {
        createUser,
        loginUser,
        googleUser,
        signUpWithGoogle,
        logOut,
        regUser,
        setRegUser,
    }


    return <AuthContext value={contextValus}>
        {children}
    </AuthContext>
};

export default AuthProvider;