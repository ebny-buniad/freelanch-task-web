import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { auth } from '../../firebase.init';


const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // console.log('Current User is', user)


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
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
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

    const [myInfo, setMyInfo] = useState(null);
    // console.log(myInfo)

    const contextValus = {
        createUser,
        loginUser,
        user,
        signUpWithGoogle,
        logOut,
        loading,
        setUser,
        setMyInfo,
        myInfo
    }

    return <AuthContext value={contextValus}>
        {children}
    </AuthContext>
};

export default AuthProvider;