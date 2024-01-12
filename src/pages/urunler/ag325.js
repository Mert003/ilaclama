// TwoColumnLayout.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ag325 from "../../images/ag325.jpg";
const Ag325 = () => {
    return (
        <Container className='my-5'>


            <Row className='px-5'>
                <Col md={3}>
                    {/* Left Column with Image */}
                    <div className='column'>
                        <img
                            src={ag325} // Replace with your actual image path
                            alt='fdsfsd'
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </Col>
                <Col md={9}>
                    {/* Right Column with Header and List */}
                    <div className='column'>
                        <h3>AG-325 Fare ve Hasere Kovucu Cihaz</h3>
                        <ul>
                            <li>Fare, sıçan, tahta kurusu, kuş, yarasa, kene, arı, sinek, örümcek, güve, böcek vs. vs. karşı etkili mücadele yöntemi</li>
                            <li>Ultrasonik ses etki alanı: 250 m2</li>
                            <li>Dış ortamda ultrasonik ses cihazdan 20 metre mesafeye kadar etkilidir</li>
                            <li>Depolar, fabrikalar ve çiftlikler gibi büyük alanlarda kullanım amacıyla tasarlanmıştır</li>
                            <li>Cihaz Frekans Aralığı: 12KHZ-65KHZ</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Ag325;
