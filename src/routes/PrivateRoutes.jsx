import React, { use } from 'react';
import AuthContext from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../components/Spinner/Spinner';

const PrivateRoutes = ({ children }) => {
    const { regUser, googleUser, loading } = use(AuthContext);
    const location = useLocation();

    if(loading){
        return <Spinner></Spinner>
    }

    if (!googleUser && !regUser) {
        return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    }

    return children;
};

export default PrivateRoutes;