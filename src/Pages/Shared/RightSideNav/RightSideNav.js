import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch, FaInstagram } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarusel from '../BrandCarusel/BrandCarusel';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
    const googleProvider = new GoogleAuthProvider()
    const {signupWithGoogle} = useContext(AuthContext)
    const hendelSigninGoogle = ()=>{
        signupWithGoogle(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>console.error(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={hendelSigninGoogle} variant="outline-primary"><FcGoogle /> Login with Google</Button>
                <Button className='my-2' variant="outline-dark"><FaGithub /> Login with github</Button>
            </ButtonGroup>
            <div>
                <h5 className='my-1'>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaInstagram /> Intagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarusel></BrandCarusel>
            </div>
        </div>
    );
};

export default RightSideNav;