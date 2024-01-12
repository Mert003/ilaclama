// TwoColumnLayout.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ultrasonik from "../../images/ultrasonik.jpg";
const Ultrasonik = () => {
    return (
        <Container className='my-5'>


            <Row className='px-5'>
                <Col md={3}>
                    {/* Left Column with Image */}
                    <div className='column'>
                        <img
                            src={ultrasonik} // Replace with your actual image path
                            alt='fdsfsd'
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </Col>
                <Col md={9}>
                    {/* Right Column with Header and List */}
                    <div className='column'>
                        <h3>Ultrasonik ve Sonik Atak Kus Kovucu</h3>
                        <ul>
                            <li>Martı, Güvercin ve Karga gibi büyük yada ufak kuş türlerine etkili sonik ses</li>
                            <li>Kapsama alanı: 1000 m2</li>
                            <li>Sonik atak özellikli kuş kovucu ses teknolojisi</li>
                            <li>Hareket detektörlü enerji tasarruf mekanizması</li>
                            <li>%97 oranında suya dirençli</li>
                            <li>Soğuk sıcak her türlü hava koşulunda kullanılabilme özelliği.</li>
                            <li>Geceleyin otomatik olarak kapanma fonksiyonlu</li>
                            <li>Güvenli: İnsan ve çevre sağlığına zararsız</li>
                            <li>130° lik açılı kaplama alanında 15-20 metreye kadar etkili</li>


                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Ultrasonik;
