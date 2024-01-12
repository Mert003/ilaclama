// Import necessary components and styling
import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

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
            <Link to="/">Anasayfa</Link>      
            <Link to="/farehasare">Fare Haşere Kovucu</Link>  
            <Link to="/kuskovucu">Kuş Kovucu Sistemler</Link>
            <Link to="/kusengelleyici">Kuş Engelleyiciler</Link>
            <Link to="/kedikopekkovucu">Kedi Köpek kovucular</Link>
            <Link to="/hakkimizda">Hakkımızda</Link>
            <Link to="/iletisim">İletişim</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
