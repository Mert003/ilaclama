// TwoColumnLayout.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ag225 from "../../images/ag225.jpg";
const Ag225 = () => {
    return (
        <Container className='my-5'>


            <Row className='px-5'>
                <Col md={3}>
                    {/* Left Column with Image */}
                    <div className='column'>
                        <img
                            src={ag225} // Replace with your actual image path
                            alt='fdsfsd'
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </Col>
                <Col md={9}>
                    {/* Right Column with Header and List */}
                    <div className='column'>
                        <h3>AG-225 Ultrasonik Fare ve Haşere Kovucu Cihaz</h3>
                        <ul>
                            <li>Fare, sıçan gibi kemirgenlerle bazi haşerelere etkilidir.</li>
                            <li>Cihaz etkisini ultrasonik ses dalgaları yayarak gösterir.</li>
                            <li>Kapsama alanı: 225 m2</li>
                            <li>Evlerde, okullarda ve büro benzeri ufak mekanlarda kullanım amacıyla tasarlanmıştır.</li>
                            <li>Kullanıma hazır. Fişe takmak yeterli. Herhangi bir özel bakıma gerek yoktur.</li>
                            <li>Kullanma ömrü 7-10 sene</li>
                            <li>Radyo kadar ekonomik enerji tüketimi</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Ag225;
