import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const {createUser} = useContext(AuthContext)
    const hendelSubmit = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const photoUrl = form.photo.value;
        const name = form.name.value;
        console.log(email, password, confirm, photoUrl, name)
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset()
            navigate('/')
        })
        .catch(error =>setError(error.message))

    }
    return (
        <Form onSubmit={hendelSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your PhotoUrl</Form.Label>
                <Form.Control type="text" name='photo' placeholder="Your PhotoUrl" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name='confirm' placeholder="Confirm Password"required />
            </Form.Group>
            <Form.Text className="text-danger d-block mb-3 mt-0">
                   {error}
                </Form.Text>
            
            <Button variant="primary" type="submit">
               Register
            </Button>
        </Form>
    );
};

export default Register;