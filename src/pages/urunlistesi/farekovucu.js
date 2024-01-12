// TwoRowsThreeColumns.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ag450 from "../../images/ag450.jpg";
import ag225 from "../../images/ag225.jpg";
import ag325 from "../../images/ag325.jpg";
import ag113 from "../../images/ag113.jpg";
import ag715 from "../../images/ag715.jpg";
import ultrasonik from "../../images/ultrasonik.jpg";
import { Link } from "react-router-dom";
import "./urunler.css";

const Farekovucu = () => {
    return (
        <Container className='my-5'>
            <Row className='d-flex'>
                <Col style={{ flex: "1" }}><Link to="/ag450">
                    <div className="column">
                        <img src={ag450} alt="fdsfsd 1" style={{ width: "224px", height: "143px", objectFit: "contain" }} />
                        <h3>AG-450 Ultrasonik Frekans Fare Kus ve Yarasa Kovucu Cihaz</h3>
                        <p>Etki Alani: 720 m2</p>
                    </div></Link>
                </Col>
                <Col style={{ flex: "1" }}><Link to="/ag325">
                    <div className="column">
                        <img src={ag225} alt="fdsfsd 2" style={{ width: "224px", height: "143px", objectFit: "contain" }} />
                        <h3>AG-225 Ultrasonik Fare ve Haşere Kovucu Cihaz</h3>
                        <p>Etki Alani: 225 m2</p>
                    </div></Link>
                </Col>

                <Col style={{ flex: "1" }}> <Link to="/ag325">
                    <div className="column">
                        <img src={ag325} alt="fdsfsd 3" style={{ width: "224px", height: "143px", objectFit: "contain" }} />
                        <h3>AG-325 Fare ve Hasere Kovucu Cihaz</h3>
                        <p>Etki Alani: 250 m2</p>
                    </div></Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/ag715">
                        <div className="column">

                            <img src={ag715} alt="fdsfsd 1" style={{ width: "224px", height: "143px", objectFit: "contain" }} />
                            <h3>AG-715 Ultrasonik Kedi ve Köpek Kovucu Cihaz</h3>
                            <p>Etki Alani: 100 m2</p>
                        </div></Link>

                </Col>
                <Col>
                <Link to="/ag113">
                    <div className="column">
                        <img src={ag113} alt="fdsfsd 2" style={{ width: "224px", height: "143px", objectFit: "contain" }} />
                        <h3>AG-113s Ultrasonik Frekans Fare ve Hasere Kovucu</h3>
                        <p>Etki Alani: 150 m2</p>
                    </div></Link>
                </Col>
                <Col>
                <Link to="/ultrasonik">
                    <div className="column">
                        <img src={ultrasonik} alt="fdsfsd 3" style={{ width: "224px", height: "143px", objectFit: "contain" }} />
                        <h3>Ultrasonik ve Sonik Atak Kus Kovucu</h3>
                        <p>Etki Alani: 1000 m2</p>
                    </div></Link>
                </Col>
            </Row>
            <Row className='my-5 w-75 m-auto'>
                <Col>
                    <h3>Montaj Önerileri</h3>
                    <p>Cihazların yerden yüksekliĝi yaklaşık olarak 50 ila 80 cm kadar olmalıdır.
                        Fare ve haşere kovucu ultrasonik ses cihazları mümkünse giriş ve çıkış kapısına yakın bir yere monte edilmelidir
                        Giriş kapılarına yakın bir yere monte edildiĝinde cihazlar zemine bakacak şekilde ayarlanıp kapı girişinin ortasına
                        doĝru bakması saĝlanmalıdır</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Farekovucu;
