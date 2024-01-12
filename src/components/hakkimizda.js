import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HakkimizdaFoto from "../images/hakkimizda.jpg";

const Hakkimizda = () => {
    return (
        <Container className='my-5'>
            <Row>
                {/* Left Column: Header and Description */}
                <Col xs={12} md={6} className='order-2 order-md-1'>
                    <div>
                        <h2>Bizi Daha Yakından Tanıyın</h2>
                        <p>Atlas Kuş Konmaz Tel & Haşere Cihazları olarak, uzun yıllara dayanan deneyimimizle kaliteli çözümler sunuyoruz. Müşteri memnuniyetini öncelikli hedef olarak belirleyen bir ekibiz. Modern teknolojiyi kullanarak geliştirdiğimiz kuş konmaz teller ve haşere cihazları, çevre dostu ve etkili bir koruma sağlamaktadır.</p>

                        <p>  Firmamız, güvenilir ve dayanıklı malzemeler kullanarak ürettiği kuş konmaz tellerle binaları, altyapıları ve diğer yapıları kuşlardan koruma amacını taşır. Aynı zamanda, haşere cihazlarımız sayesinde zararlı böcek ve haşarelerle mücadelede etkili çözümler sunuyoruz.</p>

                       
                        <p>   İhtiyacınıza uygun kuş konmaz teller ve haşere cihazları için bize güvenebilir, profesyonel ekibimizin sunduğu çözümlerle yaşam alanlarınızı güvenli ve huzurlu bir şekilde koruyabilirsiniz.</p>
                    </div>
                </Col>

                {/* Right Column: Image */}
                <Col xs={12} md={6} className='order-1 order-md-2'>
                    <Image src={HakkimizdaFoto} alt="Your Image" fluid />
                </Col>
            </Row>
        </Container>
    );
};

export default Hakkimizda;
