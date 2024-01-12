// OneRowTwoColumns.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ultrasonik from '../../images/ultrasonik.jpg'; // Replace with your actual image paths
import ag450 from '../../images/ag450.jpg';
import { FaFilePdf } from "react-icons/fa6";

import samplePDF1 from "../../pdfs/Sonik_Atak_Kovucu.pdf";
import samplePDF2 from "../../pdfs/UltrasonikAG450KullanmaKlavuzu.pdf";
import {Link} from "react-router-dom";

const Kuskovucu = () => {
 
  return (
    <Container className='my-5'>
      <Row>
        <Col>
        <Link to="/ultrasonik">
          <div className="column">
            <img src={ultrasonik} alt="fdsfsd 1" style={{width:"276px",height:"202px"}}/>
            <h3>Ultrasonik ve Sonik Atak Cihazi</h3>
            <ul>
              <li>Martı, Güvercin ve Karga gibi büyük yada ufak kuş türlerine etkili sonik ses</li>
              <li>Kapsama alani: 1000 m2</li>
              <li>Sonik atak özellikli kuş kovucu ses tekonolojisi</li>
              <li>Hareket detektörlü enerji tasarruf mekanizması</li>
              <li>%97 oranında suya dirençli</li>
              <li>Soğuk sıcak her türlü hava koşulunda kullanılabilme özelliği.</li>
              <li>Geceleyin otomatik olarak kapanma fonksiyonlu</li>
              <li>Güvenli: insan ve çevre sağlığına zararsız</li>
              <li>130° lik açılı kaplama alanında 15-20 metreye kadar etkili</li>
              <li>Sonik Atak kuş kovucu cihaz kullanma klavuzu</li>
            </ul>
            <a href={samplePDF1} target="_blank"
                    rel="noreferrer">
                    <FaFilePdf size={30}/>
                </a> 
           

          </div>
          </Link>
        </Col>
        <Col>
        <Link to="/ag450">
          <div className="column">
            <img src={ag450} alt="fdsfsd 2" style={{width:"276px",height:"202px"}}/>
            <h3>Ultrasonik kus ve yarasa kovucu</h3>
            <ul>
              <li>Martı, Güvercin ve Karga gibi büyük yada ufak kuş ve yarasa türlerine etkili ultrasonik ses</li>
              <li>Kapsama alanı: 720 m2</li>
              <li>Frekans aralığı: 12KHZ-65KHZ</li>
              <li>Dış ortamda cihazdan 20-30 metre mesafeye kadar etkilidir.</li>
              <li>Depolar, fabrikalar ve çiftlikler gibi büyük alanlarda kullanım amacıyla tasarlanmıştır.</li>
              <li>10 değişik ultrasonik atak kovucu frekans ayarlanabilme özellikli</li>
              <li>Ev, Bina çatıları, Depolar, Otel ve Fabrika gibi yerlerde kullanmaya uygun</li>
              <li>Teknik personelimizle montaj dahil hizmet</li>
              <li>2 sene garantili</li>
              <li>Ultrasonik atak kus kovucu kullanma klavuzu</li>
            </ul>
            <a href={samplePDF2} target="_blank"
                    rel="noopener noreferrer">
                  <FaFilePdf size={30}/>
                </a>  

          </div>
          </Link>
        </Col>
      </Row>

      <Row>

      </Row>
    </Container>
  );
};

export default Kuskovucu;
