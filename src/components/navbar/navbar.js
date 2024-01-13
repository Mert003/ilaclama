// Import necessary components and styling
import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { Link } from 'react-router-dom';
import "./navbar.css";
import logo from "../../images/logo.png";

// Your Navbar component
const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="lg" bg="dark" variant="dark" className='p-0'>
      <Container className='p-0'>
        <Navbar.Brand href="#home" className='d-flex align-items-center'><Link to="/"> <img src={logo} width={100} height={100} alt='asdsadsd' /></Link>
          <div className='d-flex d-md-none flex-column justify-content-center'>
          <h5 className='d-flex d-md-none'>Atlas</h5>
         <div className='d-flex d-md-none flex-row align-items-center'> <p style={{fontSize:"7px",marginBottom:0}}>Kuş Konmaz Telleri &#38; Haşereci</p></div>


          </div>

        </Navbar.Brand>


        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className="nav-link" onClick={() => setExpanded(!expanded)}>Anasayfa </Link>
            <Link to="/farehasere" className="nav-link" onClick={() => setExpanded(!expanded)}>Fare Haşere Kovucu </Link>
            <Link to="/kuskovucu" className="nav-link" onClick={() => setExpanded(!expanded)}>Kuş Kovucu Sistemler </Link>
            <Link to="/kusengelleyici" className="nav-link" onClick={() => setExpanded(!expanded)}>Kuş Engelleyiciler </Link>
            <Link to="/kedikopekkovucu" className="nav-link" onClick={() => setExpanded(!expanded)}>Kedi Köpek kovucular </Link>
            <Link to="/hakkimizda" className="nav-link" onClick={() => setExpanded(!expanded)}>Hakkımızda </Link>
            <Link to="/iletisim" className="nav-link" onClick={() => setExpanded(!expanded)}>İletişim</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
