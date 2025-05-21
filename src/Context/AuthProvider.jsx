import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { auth } from '../../firebase.init';


const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [googleUser, setGoogleUser] = useState(null)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google Sign Up and Sign in
    const provider = new GoogleAuthProvider();
    const signUpWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    // Get Current Login User --
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setGoogleUser(user);
            setLoading(false)


            return () => {
                unsubscribe();
            }
        })

    }, [])

    // Logout Current User
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    const [regUser, setRegUser] = useState(null)
    // console.log(regUser.name)

    // Bid Counts
    const [bidCount, setBidCount] = useState(0);



    const contextValus = {
        createUser,
        loginUser,
        googleUser,
        signUpWithGoogle,
        logOut,
        regUser,
        setRegUser,
        bidCount,
        setBidCount,
        loading,
    }


    return <AuthContext value={contextValus}>
        {children}
    </AuthContext>
};

export default AuthProvider;