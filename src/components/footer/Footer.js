import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./footer.css";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";


function Footer() {
  return (
    <footer className="footer mt-2 w-100 text-center bg-light" >


      <Row className="py-3">
       
      <Col md={4}>
          {/* Menu Column */}
          <h5>Ürünlerimiz</h5>
          <ul className="list-unstyled">
            <Link activeClass="active" to="home" offset={50}><li>Fare Haşere Kovucu </li></Link>

            <Link activeClass="active" to="services" offset={50}><li>Kuş Kovucu Sistemler</li></Link>
            <Link activeClass="active" to="gallery" offset={50}><li>Kuş Engelleyiciler</li></Link>
            <Link activeClass="active" to="gallery" offset={50}><li>Kedi Köpek Kovucu</li></Link>
          </ul>
        </Col>

        <Col md={4}>
          {/* Menu Column */}
          <h5>Menu</h5>
          <ul className="list-unstyled">
            <Link activeClass="active" to="home" offset={50}><li>Home</li></Link>

            <Link activeClass="active" to="services" offset={50}><li>Services</li></Link>
            <Link activeClass="active" to="gallery" offset={50}><li>Gallery</li></Link>
          </ul>
        </Col>
        <Col md={4}>
          {/* Privacy Policy Column */}
          <h5>Privacy Policy</h5>
          <ul className="list-unstyled">
            <li><a href="/terms" className="text-decoration-none">Terms of Service</a></li>
            <li><a href="/cookies" className="text-decoration-none">Cookie Policy</a></li>
            <li><a href="/support" className="text-decoration-none">Support</a></li>
          </ul>
        </Col>
       
       
      </Row>
    </footer>
  );
}

export default Footer;
