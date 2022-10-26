import React, { useContext } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRouts = ({children}) => {
    const {user, loding} = useContext(AuthContext)
    const location = useLocation();
    console.log(user)
    console.log(location)
    if(loding){
        return<Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    }
    if(!user){
        return<Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivateRouts;