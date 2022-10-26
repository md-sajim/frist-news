import React, { useContext, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const Profiles = () => {
  const { user } = useContext(AuthContext)
  const [name, setName] = useState(user.displayName)
  const photoUrlRef = useRef(user.photoURL)
  const hendleSubmit = e => {
e.preventDefault()
console.log(photoUrlRef.current.value)
  }
  const hendleNameChang = e => {
    setName(e.target.value)
  }
  return (
    <Form onSubmit={hendleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your Name</Form.Label>
        <Form.Control onChange={hendleNameChang} defaultValue={name} type="text" placeholder="Your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control ref={photoUrlRef} defaultValue={user.photoURL} type="text" placeholder="Photo URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Profiles;