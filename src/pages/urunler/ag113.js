// TwoColumnLayout.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ag113 from "../../images/ag113.jpg";
const Ag113 = () => {
    return (
        <Container className='my-5'>


            <Row className='px-5'>
                <Col md={3}>
                    {/* Left Column with Image */}
                    <div className='column'>
                        <img
                            src={ag113} // Replace with your actual image path
                            alt='fdsfsd'
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </Col>
                <Col md={9}>
                    {/* Right Column with Header and List */}
                    <div className='column'>
                        <h3>AG-113s Ultrasonik Frekans Fare ve Hasere Kovucu</h3>
                        <ul>
                            <li>15 saniyede bir otomatik olarak değişen ultrasonik ses</li>
                            <li>Etki alanı: 150 m2</li>
                            <li>Ev, depo, apartman, restoran, okul ve büro benzeri mekanlarda zehirsiz mücadele yöntemi.</li>
                            <li>Cihazların insan ve evcil hayvanlara rahatsız edici bir etkisi yoktur.</li>
                            <li>Elektronik cihazlara olumsuz bir etkisi yoktur.</li>
                            <li>İnsan sağlığına tehlikeli kimyasalları gereksiz kılar.</li>
                            <li>Kullanıma hazır. Fişe takmak yeterli.</li>
                            <li>Herhangi bir özel bakıma gerek yoktur.</li>

                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Ag113;
