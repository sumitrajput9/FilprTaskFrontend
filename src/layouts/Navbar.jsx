import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

const logo = new URL("../assets/logo.svg", import.meta.url);

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="navbar-custom bg-white shadow-sm">
      <Container>
        <img src={logo} alt="logo" className="logo" />
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navLink align-items-center">
            <LinkContainer to="/">
              <Nav.Link>HOME</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/facilities">
              <Nav.Link>SERVICES</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/activities">
              <Nav.Link>ABOUT PROJECT</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/careers">
              <Nav.Link>CAREERS</Nav.Link>
            </LinkContainer>
            <Button className="contact mx-2">CONTACT</Button>
            <Button onClick={handleLogin} className="login-btn">
             ADMIN LOGIN
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
