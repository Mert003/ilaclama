// ThreeColumns.js
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
 // Replace with the actual icons you want to use

const Contact = () => {
  return (
    <Container className='bg-light p-3 '>
    <Row>
      <Col>
        <div className="column">
          <FaEnvelope size={30} />
          <h3>Email</h3>
          <p>Atlashaserecihazlari@gmail.com</p>
        </div>
      </Col>
      <Col>
        <div className="column">
           <FaLocationDot size={30} /> 
          <h3>Adresimiz</h3>
          <p>Köşklüçeşme mahallesi 530/2 sokak no:13 Kocaeli/Gebze </p>
         
        </div>
      </Col>
      <Col>
        <div className="column">
          <FaPhone size={30} />
          <h3>Telefon Numaramız</h3>
          <p>05334911774</p>
        </div>
      </Col>
    </Row>
    </Container>
  );
};

export default Contact;
