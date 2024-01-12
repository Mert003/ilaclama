// ContactPage.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';


const ContactPage = () => {
    const[ad,setAd] = useState("");
    const[email,setEmail] = useState("");
    const[mesaj,setMesaj] = useState("");

    const template_params={
        from_name:ad,
        from_email:email,
        to_name:"Atlas",
        message:mesaj,
    };

    const sendEmail = (e) => {
      try {
        e.preventDefault();
    
        emailjs.send('service_hox6fhr', 'template_r0wzen3', template_params, 'QEQ9ur4gFyFPDfYJX')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
      } catch (error) {
        return null
      }
        
      };

  return (
    <Container className='my-5'>
      <Row>
        <Col md={6}>
          {/* Contact Form */}
          <h2>Bizimle İletişime Geçin</h2>
          <Form onSubmit={sendEmail}>
            <Form.Group controlId='formName' className='my-3'>
              <Form.Label>İsminiz</Form.Label>
              <Form.Control type='text' placeholder='İsim' onChange={(e)=>{setAd(e.target.value)}} />
            </Form.Group>
            <Form.Group controlId='formEmail' className='my-3'>
              <Form.Label>Email Adresiniz</Form.Label>
              <Form.Control type='email' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
            </Form.Group>
            <Form.Group controlId='formMessage' className='my-3'>
              <Form.Label>Mesajınız</Form.Label>
              <Form.Control as='textarea' rows={4} placeholder='Mesaj' onChange={(e)=>{setMesaj(e.target.value)}}/>
            </Form.Group>
            <Button variant='primary' type='submit' className='my-3'>
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          {/* Contact Details */}
          <h2>Adresimiz</h2>
          
          {/* Google Maps Embed (Replace with your own Google Maps embed code) */}
          <div className='embed-responsive embed-responsive-16by9'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.451819438166!2d29.401472775983716!3d40.79606417138105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadf9b055d9a2f%3A0x773bf0136068a880!2zS8O2xZ9rbMO8IMOHZcWfbWUsIDUzMC8yLiBTay4gTm86MTMsIDQxNDAwIEdlYnplL0tvY2FlbGksIFTDvHJraXll!5e0!3m2!1sen!2sus!4v1705082487881!5m2!1sen!2sus" width="100%" height="450" title='adresiniz'  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
