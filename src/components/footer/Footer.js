import React from 'react';
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
            <Link to="/farehasere" offset={50}><li>Fare Haşere Kovucu </li></Link>

            <Link to="/kuskovucu" offset={50}><li>Kuş Kovucu Sistemler</li></Link>
            <Link to="/kusengelleyici" offset={50}><li>Kuş Engelleyiciler</li></Link>
            <Link to="/kedikopekkovucu" offset={50}><li>Kedi Köpek Kovucu</li></Link>
          </ul>
        </Col>

        <Col md={4}>
          {/* Menu Column */}
          <h5>Menu</h5>
          <ul className="list-unstyled">
            <Link to="/" offset={50}><li>Anasayfa</li></Link>

            <Link to="/iletisim" offset={50}><li>İletişim</li></Link>
            <Link to="/hakkimizda" offset={50}><li>Hakkımızda</li></Link>
          </ul>
        </Col>
        <Col md={4}>
          {/* Privacy Policy Column */}
          <h5>Privacy Policy</h5>
          <ul className="list-unstyled">
            <li><a href="/" className="text-decoration-none">Terms of Service</a></li>
            <li><a href="/" className="text-decoration-none">Cookie Policy</a></li>
            <li><a href="/" className="text-decoration-none">Support</a></li>
          </ul>
        </Col>


      </Row>
      <Row>
        <Col>
          <p>© Copyright
            Bu sayfada yer alan bilgiler Akgen Kimya San. LTD®’e aittir. Sayfada yer alan fotoĝraf ve bilgiler izinsiz kopyalanamaz ve herhangi bir şekilde
            yayınlanamaz</p>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
