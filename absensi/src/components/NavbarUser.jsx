import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavbarUser = () => {


    return (

        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">HRIS</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" >
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className='text-decoration-none text-black  d-flex justify-content-center align-items-center' style={{ height: '50px', padding: '10px' }}>
                            Calendar
                        </Link>
                        <Link className='text-decoration-none text-black  d-flex justify-content-center align-items-center' style={{ height: '50px', padding: '10px' }}>
                            Calendar
                        </Link>
                        <Link className='text-decoration-none text-black  d-flex justify-content-center align-items-center' style={{ height: '50px', padding: '10px' }}>
                            Calendar
                        </Link>



                    </Nav>

                    <Button variant="outline-success">Search</Button>

                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}

export default NavbarUser