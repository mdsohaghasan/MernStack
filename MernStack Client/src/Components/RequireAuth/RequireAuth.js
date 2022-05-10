import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init'

function RequireAuth({ children }) {
    const [user] = useAuthState(auth);
    const location = useLocation();
    if (!user) {
        return <Navigate to="/Signin" state={{ from: location }} replace />;
    }
    return children;
}

export default RequireAuth