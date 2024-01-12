import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import kedi from "../../images/kedikopek.jpg"
import kusengelleyici from "../../images/kusengelleyici.jpg";
import kuskovucu from "../../images/kuskovucu.jpg";

const Hero = () => {
  return (
    <Container className='my-4'>
    
      <Row >
        <Col className='col-12 col-md-4'>
          <Image src={kuskovucu} alt="Image 1" fluid />
          <h3>Kuş Kovucu Sistemler</h3>
          <p>Haşarelere karşı etkili kuş kovucu sistemlerimizle doğal ve çevre dostu bir koruma sağlayın. Yüksek teknoloji ve güvenilir tasarımlarımız, zararlı haşarelerle mücadelede etkin bir çözüm sunar. </p>
        </Col>
        <Col className='col-12 col-md-4'>
          <Image src={kusengelleyici} alt="Image 2" fluid />
          <h3>Kuş Engelleyiciler</h3>
          <p>Kuş engelleyici sistemlerimizle çatılarınızı, binalarınızı ve diğer alanlarınızı kuşlardan koruyun. Yenilikçi tasarımlarımız ve etkili teknolojimizle, kuşların neden olduğu sorunları önleyin.</p>
        </Col>
        <Col className='col-12 col-md-4'>
          <Image src={kedi} alt="Image 3" fluid />
          <h3>Kedi Köpek Kovucu</h3>
          <p>Kedi ve köpekleri etkili bir şekilde uzak tutan kovucu sistemlerimizle, bahçe, ev ve diğer alanlarınızı koruyun. Yenilikçi teknoloji ve güvenilir tasarımlarımız, sevdiklerinizle sağlıklı bir çevre oluşturmanıza yardımcı olur. </p>
        </Col>
      </Row>

      
    </Container>
  );
};

export default Hero;