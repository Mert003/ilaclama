// TwoColumnLayout.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ag450 from "../../images/ag450.jpg";
import samplePDF from "../../pdfs/UltrasonikAG450KullanmaKlavuzu.pdf";
import { FaFilePdf } from 'react-icons/fa';
const Ag450 = () => {
    return (
        <Container className='my-5'>


            <Row className='px-5'>
                <Col md={3}>
                    {/* Left Column with Image */}
                    <div className='column'>
                        <img
                            src={ag450} // Replace with your actual image path
                            alt='fdsfsd'
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </Col>
                <Col md={9}>
                    {/* Right Column with Header and List */}
                    <div className='column'>
                        <h3>AG-450 Ultrasonik Frekans Fare ve HasereKovucu</h3>
                        <ul>
                            <li>Fare, sıçan gibi kemirgenlerle yarasa mücadelesinde etkilidir.</li>
                            <li>Cihaz etkisini fare kovucu ultrasonik frekans ses dalgaları yayarak</li>
                            <li>Kapsama alanı: 720 m2</li>
                            <li>Evlerde, okullarda ve büro benzeri ufak mekanlarda kullanım amacıyla tasarlanmıştır.</li>
                            <li>Cihazlar kullanıma hazır. Cihazi fişe takmak yeterli. Kullanma süresince cihazlar herhangi bir özel bakıma gerek yoktur.</li>
                            <li>Kullanma Kılavuzu
                                <a href={samplePDF} target="_blank" rel="noopener noreferrer">
                                    <FaFilePdf size={30} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Ag450;
