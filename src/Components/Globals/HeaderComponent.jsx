import {
    Container, 
    Nav, 
    Navbar, 
    NavDropdown, 
    Badge, 
    Form, 
    Dropdown, 
    DropdownButton, 
    Button,
    InputGroup,
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { LinkContainer } from 'react-router-bootstrap';

export default function HeaderComponent () {
      return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
          <Container>
            <LinkContainer to="/">
                <Navbar.Brand>MERN STORE</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <InputGroup>
                    <DropdownButton id="dropdown-basic-button" title="All">
                        <Dropdown.Item>Electronics</Dropdown.Item>
                        <Dropdown.Item>Books</Dropdown.Item>
                        <Dropdown.Item>Cars</Dropdown.Item>
                    </DropdownButton>
                    <Form.Control type="text" placeholder="Search in Store..." />
                    <Button variant="warning">
                        <i className="bi bi-search"></i>
                    </Button>
                </InputGroup>
            </ Nav>
            <Nav>
                <LinkContainer to="/admin/orders">
                    <Nav.Link className='position-relative'>Admin
                    <span className='position-absolute top-1 start-100 translate-middle p-2 bg-danger border border-light rounded-circle'>
                    </span>
                    </Nav.Link>
                </LinkContainer>

                <NavDropdown title="User's Name" id="collasible-nav-dropdown">
                <NavDropdown.Item 
                  as={Link} 
                  to="/user"
                  eventKey="/user">My Profile</NavDropdown.Item>
                  <NavDropdown.Item 
                  as={Link} 
                  to="/user/my-orders"
                  eventKey="/user/my-orders">My Orders</NavDropdown.Item>

                  <NavDropdown.Item >LogOut</NavDropdown.Item>
                </NavDropdown>

                {/* <Link to="/login" className='Link'>
                <Nav.Link>Login</Nav.Link>
                </Link>

                <Link to="/register" className='Link'>
                <Nav.Link>Register</Nav.Link>
                </Link> */}

                <Nav.Link>
                    <Badge bg="danger">20</Badge>
                    <i className="bi bi-cart-dash"></i>
                    <span className='ms-1'>CART</span>
                </Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }