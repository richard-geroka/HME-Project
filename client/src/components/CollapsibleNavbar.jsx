/* eslint-disable no-unused-vars */
import { useCookies } from 'react-cookie';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.png';

const CollapsibleNavbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['jwt-access', 'user']);

  const handleOnClick = () => {
    removeCookie('jwt-access');
    removeCookie('user');
  };

  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="hme logo"
            style={{ width: '120px', height: 'auto' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container>
            <Nav className="d-flex justify-content-end">
              <Nav.Link href="/" className="fw-normal fs-5 text-success">
                Home
              </Nav.Link>
              <Nav.Link
                href="/services"
                className="fw-normal fs-5 text-success"
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="/projects"
                className="fw-normal fs-5 text-success"
              >
                Projects
              </Nav.Link>
              <Nav.Link href="/about" className="fw-normal fs-5 text-success">
                About Us
              </Nav.Link>
              <Nav.Link href="/contact" className="text-danger fs-5 fw-bolder">
                Contact Us
              </Nav.Link>
              {cookies.user ? (
                <Nav.Link
                  href="/"
                  onClick={handleOnClick}
                  className="fw-normal fs-5 text-success"
                >
                  Logout
                </Nav.Link>
              ) : undefined}
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CollapsibleNavbar;
