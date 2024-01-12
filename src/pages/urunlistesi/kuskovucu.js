// OneRowTwoColumns.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ultrasonik from '../../images/ultrasonik.jpg'; // Replace with your actual image paths
import ag450 from '../../images/ag450.jpg';
import { FaFilePdf } from "react-icons/fa6";

import samplePDF1 from "../../pdfs/Sonik_Atak_Kovucu.pdf";
import samplePDF2 from "../../pdfs/UltrasonikAG450KullanmaKlavuzu.pdf";
const Kuskovucu = () => {
   /*  const onButtonClick = () => {
    fetch("../../pdfs/Sonik_Atak_Kovucu.pdf").then((response) => {
        response.blob().then((blob) => {
         
            // Creating new object of PDF file
            const fileURL =
                window.URL.createObjectURL(blob);
                 
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "SamplePDF.pdf";
            alink.click();
        });
    });
} */
  return (
    <Container className='my-5'>
      <Row>
        <Col>
          <div className="column">
            <img src={ultrasonik} alt="Image 1" style={{width:"276px",height:"202px"}}/>
            <h3>Ultrasonik ve Sonik Atak Cihazi</h3>
            <p>Kapsama alani: 1000 m2</p>
            <a href={samplePDF1} target="_blank"
                    rel="noreferrer">
                    <FaFilePdf size={30}/>
                </a> 
           

          </div>
        </Col>
        <Col>
          <div className="column">
            <img src={ag450} alt="Image 2" style={{width:"276px",height:"202px"}}/>
            <h3>Ultrasonik kus ve yarasa kovucu</h3>
            <p>Kapsama alani: 720 m2</p>
            <a href={samplePDF2} target="_blank"
                    rel="noreferrer">
                  <FaFilePdf size={30}/>
                </a>  

          </div>
        </Col>
      </Row>

      <Row>

      </Row>
    </Container>
  );
};

export default Kuskovucu;
