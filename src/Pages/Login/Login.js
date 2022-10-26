import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError,] = useState('')
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"
    const navigate = useNavigate()
    const { signInUser,setLoding } = useContext(AuthContext);
    const hendleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
        .then(result =>{
            const user = result.user;
            // console.log(user)
            form.reset()
            setError("")
            if(user.emailVerified){
                navigate(from, {replace:true})
            }
            else(
                toast.error("Please first verifi your email")
            )
        })
        .catch(error => setError(error.message))
        .finally(()=>{
            setLoding(false)
        })
    }
    return (
        <Form onSubmit={hendleSignIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required/>
            </Form.Group>
            <Form.Text className="text-danger d-block mb-3 mt-0">
                {error}
            </Form.Text>

            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
};

export default Login;