import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
    const navigate = useNavigate()
    const [chack, setChack] = useState(false)
    console.log(chack)
    const hendelAccepted = (e) => {
        setChack(e.target.checked)
    }
    const [error, setError] = useState('')
    const { createUser, updateUserProfil, emailVarifacition } = useContext(AuthContext)
    const hendelSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const photoUrl = form.photo.value;
        const name = form.name.value;
        console.log(email, password, confirm, photoUrl, name)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                navigate('/')
                setError("")
                hendleUpdateProfil(name, photoUrl)
                hendleEmailVarifacition()
                toast.success("Please varifay your email. Before Login")
            })
            .catch(error => setError(error.message))

    }
    const hendleUpdateProfil=(name, photoUrl)=>{
        const profil = {
            displayName: name,
            photoURL: photoUrl
        }
        updateUserProfil(profil)
        .then(()=>{})
        .catch(()=>{})
    }
    const hendleEmailVarifacition = ()=>{
        emailVarifacition()
        .then(()=>{})
        .catch(()=>{})

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
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name='confirm' placeholder="Confirm Password" required />
            </Form.Group>
            <Form.Text className="text-danger d-block mb-3 mt-0">
                {error}
            </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox"
                onClick={hendelAccepted}
                label={<>
                    "Accept Terms and
                    <Link to="/trems&conditions" className='text-decoration-none'> Conditions!</Link>
                </>} />
            </Form.Group>

            <Button disabled={!chack} variant="primary" type="submit">
                Register
            </Button>
        </Form>
    );
};

export default Register;