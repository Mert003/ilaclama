// Import necessary components and styling
import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Your Navbar component
const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Your Brand</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Anasayfa</Nav.Link>        
            <Nav.Link href="#products">Kuş Kovucu Sistemler</Nav.Link>
            <Nav.Link href="#products">Kuş Engelleyiciler</Nav.Link>
            <Nav.Link href="#products">Kedi Köpek kovucular</Nav.Link>
            <Nav.Link href="#about">Hakkımızda</Nav.Link>
            <Nav.Link href="#contact">İletişim</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
