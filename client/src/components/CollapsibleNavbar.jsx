import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const CollapsibleNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="#home">HME Construction Services</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container>
            <Nav className="d-flex justify-content-end">
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CollapsibleNavbar;
