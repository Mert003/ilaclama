// Import necessary components and styling
import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./navbar.css";
import logo from "../../images/logo.png";

// Your Navbar component
const NavigationBar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <Navbar expanded={expanded} expand="lg" bg="dark" variant="dark" className='p-0'>
      <Container className='p-0'>
        <Navbar.Brand href="#home"><img src={logo} width={100} height={100} alt='asdsadsd'/></Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className="nav-link">Anasayfa </Link>
            <Link to="/farehasere" className="nav-link">Fare Haşere Kovucu </Link>
            <Link to="/kuskovucu" className="nav-link">Kuş Kovucu Sistemler </Link>
            <Link to="/kusengelleyici" className="nav-link">Kuş Engelleyiciler </Link>
            <Link to="/kedikopekkovucu" className="nav-link">Kedi Köpek kovucular </Link>
            <Link to="/hakkimizda" className="nav-link">Hakkımızda </Link>
            <Link to="/iletisim" className="nav-link">İletişim</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
