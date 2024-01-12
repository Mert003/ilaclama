// TwoColumnRow.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import foto from "../../images/kusengelleyici2.jpg";

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
              <li>Montajı kolay. Silikon tutkal yada vida kullanarak her türlü zemine kolayca monte edilebilir.</li>
              <li>Kolayca kırılıp gerektiğinde boy ayarlaması yapılabilir.</li>
              <li>Kuşlara kesinlikle %100 zararsızdır!</li>
            </ul>
          
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Kusengelleyici;
