import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Components/Pages/Spinner';
import { AuthContext } from '../Context/Context';

const PrivetRoute = ({ children }) => {
    const { user, loding } = useContext(AuthContext)
    const location = useLocation();

    if (loding) {
        return <Spinner></Spinner>;
    }
    else if (user) {
        return children;
    }
    else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
}

export default PrivetRoute
