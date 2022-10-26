import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h1>Hare is our Terms and Conditions</h1>
            <p>Go back to : <Link to='/register' className='text-decoration-none'>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;