import React, { Children } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../Firebase/Config';
import { useAuthState } from 'react-firebase-hooks/auth';

const RequireAuth = ({children}) => {
    const [user] = useAuthState(auth);
    let location = useLocation();
    

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }

    return children;
};

export default RequireAuth;