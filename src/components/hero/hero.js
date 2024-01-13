import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import kedi from "../../images/ag715.jpg"
import kedi2 from "../../images/ag113.jpg"
import kusengelleyici from "../../images/ag450.jpg";
import kuskovucu from "../../images/kusengelleyici2.jpg";
import "../../styles/animation.css";
import {Link} from "react-router-dom"
const Hero = () => {
  return (
    <Container className='my-4'>
    
      <Row >
       
      <Col className='col-12 col-md-6' id='animasyon' >
      <Link to="/farehasere">
          <Image src={kusengelleyici} alt="Image 2" fluid />
        
          <h3>Fare Haşere Kovucu</h3>
          <p>Fare ve haşere kovucu sistemlerimizle ev veya işyerinizde doğal ve çevre dostu bir koruma sağlayın. Yenilikçi teknolojimiz ve güvenilir tasarımlarımız, zararlı haşareler ve farelere karşı etkili bir savunma sunar. </p>
          </Link>
        </Col>
    

  
        <Col className='col-12 col-md-6' id='animasyon'>
        <Link to="/kuskovucu">
          <Image src={kedi} alt="Image 1" fluid  />
          
          <h3>Kuş Kovucu Sistemler</h3>
          <p>Haşarelere karşı etkili kuş kovucu sistemlerimizle doğal ve çevre dostu bir koruma sağlayın. Yüksek teknoloji ve güvenilir tasarımlarımız, zararlı haşarelerle mücadelede etkin bir çözüm sunar. </p>
       
          </Link>
        </Col>

    
        <Col className='col-12 col-md-6 my-5' id='animasyon'>
        <Link to="/kusengelleyici">
          <Image src={kuskovucu} alt="Image 2" fluid />
        
          <h3>Kuş Engelleyiciler</h3>
          <p>Kuş engelleyici sistemlerimizle çatılarınızı, binalarınızı ve diğer alanlarınızı kuşlardan koruyun. Yenilikçi tasarımlarımız ve etkili teknolojimizle, kuşların neden olduğu sorunları önleyin.</p>
          </Link>
        </Col>
      

        
        <Col className='col-12 col-md-6 my-5' id='animasyon'>
        <Link to="/kedikopekkovucu">
          <Image src={kedi2} alt="Image 3" fluid />
          
          <h3>Kedi Köpek Kovucu</h3>
          <p>Kedi ve köpekleri etkili bir şekilde uzak tutan kovucu sistemlerimizle, bahçe, ev ve diğer alanlarınızı koruyun. Yenilikçi teknoloji ve güvenilir tasarımlarımız, sevdiklerinizle sağlıklı bir çevre oluşturmanıza yardımcı olur. </p>
          </Link>
        </Col>
        
      </Row>

      
    </Container>
  );
};

export default Hero;
