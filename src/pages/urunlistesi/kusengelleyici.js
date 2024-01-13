// TwoColumnRow.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import foto from "../../images/tel.jpeg";
import foto2 from "../../images/tel2.jpeg";
import foto3 from "../../images/tel3.jpeg";

import samplePDF from "../../pdfs/kusengelleyici.pdf";
import { FaFilePdf } from 'react-icons/fa';

const Kusengelleyici = () => {
  return (
    <Container className='my-5'>
      <Row>
        <Col md={4}>
          {/* Left Column with Image */}
          <div className='column'>
            <img
              src={foto} // Replace with your actual image path
              alt='Imsdfsdfsdage'
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </Col>
        <Col md={8}>
          {/* Right Column with List */}
          <div className='column'>
            <h3>Kus Engelleyici Özellikleri</h3>
            <ul>
              <li>Fiziksel bariyer kus engelleyici %100 Etki Garantilidir</li>
              <li>Özel bir bakıma gerek yok...</li>
              <li>Uzun ömürlü paslanmaz çelik + polikarbonattab imal edilmiştir.</li>
              <li>Bina dışından kesinlikle farkedilmez. Estetik görünümü olumsuz etkilemez.</li>
              <li>Kolayca kırılıp gerektiğinde boy ayarlaması yapılabilir.</li>
              <li>Kuşlara kesinlikle %100 zararsızdır!</li>
              <li>Kullanma Kılavuzu
                <a href={samplePDF} target="_blank" rel="noopener noreferrer">
                  <FaFilePdf size={30} />
                </a>
              </li>
            </ul>

          </div>
        </Col>
      </Row>

      <Row className='my-5 d-flex justify-content-center'>
        <Col className='col-12 col-md-6'>
          <h3>Kuş engelleyici ağ seçenekleri</h3>
          <ul>
            <li>Kuş türlerine göre farklı kuş ağları kullanılmaktadır.</li>
            <li>Ufak boy kuşlar (Serçe, kırlangıç, sığırcık): 19 mm</li>
            <li>Orta boy kuşlar (Güvercin, karga): 38 veya 50 mm</li>
            <li>Büyük boy kuşlar (Martı): 75 veya 100 mm</li>
          </ul>

        </Col>
        <Col className='col-12 col-md-4' >
          <p>Kuş önleme fileleri, istenilen boyda 3 ve 5 metre eninde üretilir. Bu filelerin göz çapı, en küçük kuşun dahi giremeyeceği şekilde 2.8 cm olarak özenle üretilir. Elle kopmaz özellikte olan, beyaz renkli ve köşeleri düğümlü fileler, uzun ömürlüdür. Ayrıca hafif yapılarıyla taşıması kolaydır ve istenilen ölçülerde kesilebilir.</p>
        </Col>

      </Row>

      <Row>
        <Col>
        <img src={foto2} alt='fasda' width="50%"  style={{objectFit:"contain"}} />
        </Col>
        <Col>
          <p>
            Polipropilen veya polietilen materyalden üretilen ağlar güneşin ultraviyole ışınlarına karşı dayanıklıdır. Ayrıca, çok hafif olması montaj kolaylığı sağlamaktadır. Bina yapısına göre istenilen ölçüde hazırlanabilir.
            <br /> <br />
            <strong>ÇALIŞMA PRENSİBİ:</strong> Fiziksel engelleme yöntemi
            <br /> <br />
            <strong>UYGULAMA ALANLARI:</strong> Çatılar, çatı saçakları gibi yuvalanma olan her türlü yerde kullanılabilir.
            <br /> <br />
            <strong>EBATLAR:</strong> 19mm, 38mm, 50mm, 75mm ve 100mm
          </p>
        </Col>
       
      </Row>

      <Row>
        
        <Col>
          <h3>Kullanım Alanları</h3>
          <ul>
            <li>Balkonlarda</li>
            <li>Fabrikalarda</li>
            <li>Hayvan barınaklarında, tavuk kümeslerinde</li>
            <li>Meyve ağaçlarının üzerine (özellikle kiraz ağaçlarında kullanılır)</li>
            <li>Kuşların girmesini istemediğimiz her yerde kullanılabilir</li>
          </ul>
        </Col>
        <Col>
          <img src={foto3} width="50%" style={{objectFit:"contain"}} alt='sdtfdf' />
        </Col>

      </Row>
    </Container >
  );
};

export default Kusengelleyici;
