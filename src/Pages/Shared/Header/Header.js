import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import LaftSideNave from '../LaftSideNave/LaftSideNave';

const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    const hendleLogOut = ()=>{
        logOut()
        .then(()=>{})
        .catch(()=>{})
    }
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link className='text-decoration-none' to='/'>first news today</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All news</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Link to="/profile">
                            {
                                user?.photoURL? <Image
                                className='me-2'
                                roundedCircle
                                src={user.photoURL}
                                style={{ height: "30px" }}
                            >
                            </Image> : 
                                <FaUser  className='mt-3 me-3 text-white'/>
                            }
                        </Link>
                        <>
                            {
                                user?.uid? 
                                <>
                                <span className='text-white pt-2'>{user?.displayName}</span>
                                <button onClick={hendleLogOut} className='ms-3 fw-bold btn btn-danger'>Log Out</button>
                                </>
                                :
                                <>
                                <Link className='mx-2 text-decoration-none text-white fw-bold btn btn-warning' to="/login">Login</Link>
                                <Link className='mx-2 text-decoration-none text-white fw-bold btn btn-warning' to="/register">Register</Link>
                                </>
                            }
                          
                        </>
                    </Nav>
                    <div className='d-block d-lg-none'>
                        <LaftSideNave></LaftSideNave>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;