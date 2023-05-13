import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Navigation = () => {
  return (
    <Navbar bg="secondary" collapseOnSelect expand="sm">
      <Container className="text-secondary">
        <Navbar.Brand
          href="#home"
          style={{
            fontSize: "36px",
            fontFamily: "Segoe Print",
            color: "white",
          }}
        >
          SAJID ARSHAD
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav style={{ fontSize: "20px" }}>
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
