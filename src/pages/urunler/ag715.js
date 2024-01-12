// TwoColumnLayout.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ag715 from "../../images/ag715.jpg";
const Ag715 = () => {
    return (
        <Container className='my-5'>


            <Row className='px-5'>
                <Col md={3}>
                    {/* Left Column with Image */}
                    <div className='column'>
                        <img
                            src={ag715} // Replace with your actual image path
                            alt='fdsfsd'
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </Col>
                <Col md={9}>
                    {/* Right Column with Header and List */}
                    <div className='column'>
                        <h3>AG-715 Ultrasonik Kedi ve Köpek Kovucu Cihaz</h3>
                        <ul>
                            <li>Kedi ve köpeklerle mücadele amacıyla tasarlanmıştır.</li>
                            <li>Dayanıklı metal kasadan imal edilmiştir. Uzun ömürlüdür.</li>
                            <li>Gıda tesislerinde kullanmaya uygundur.</li>
                            <li>Cihaz kullanmaya hazır. Fişe takmanız yeterli.</li>
                            <li>Dış ortamda kullanmaya uygundur.</li>
                            <li>Cihaz etkisini Ultrasonik ses titresimleri yayarak gösterir.</li>
                            <li>Ultrasonik ses hedef hayvana hiçbir zarar vermez.</li>
                            <li>Etki alanı: Cihazdan 10 metrelik mesafeye kadardır.</li>
                            <li>Elektrikle çalışır herhangi bir özel bakıma gerek yoktur.</li>

                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Ag715;
