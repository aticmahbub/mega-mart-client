import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <h3 className="text-4xl">Loading</h3>
    }

    if(!user){
        return <Navigate to='/login' state={location?.pathname || '/'}/>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;