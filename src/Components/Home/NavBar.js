import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import img from "../img/Screenshot 2024-04-02 161320.png";
import "../../App.css";

const NavBar = () => {
  return (
    <div>
      {" "}
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary Features"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={img} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#deets" className="Info">
                Info{" "}
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes" className="Info">
                Pricing
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes" className="Info">
                Contact
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes" className="Info">
                Directory
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes" className="Info">
                <button className="Join">Join</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
