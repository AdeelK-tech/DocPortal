import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Sajid Arshad</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/About">
              About Me
            </Nav.Link>
            <Nav.Link as={Link} to="/FAQS">
              FAQ
            </Nav.Link>
            <Nav.Link as={Link} to="/Appointment">
              Appointments
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
