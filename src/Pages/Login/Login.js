import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const navigate = useNavigate()
    const { signInUser } = useContext(AuthContext);
    const hendleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            form.reset()
            navigate('/')
        })
        .catch(error => console.error(error))
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
                We'll never share your email with anyone else.
            </Form.Text>

            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
};

export default Login;