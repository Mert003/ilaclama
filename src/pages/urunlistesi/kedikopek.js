// TwoColumnLayout.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ag715 from "../../images/ag715.jpg";
import {Link} from "react-router-dom"
import samplePDF from "../../pdfs/SabitKediKopek.pdf";
import { FaFilePdf } from 'react-icons/fa';
const TwoColumnLayout = () => {
    return (
        <Container className='my-5'>
         
         <Link to="/ag715">
            <Row className='px-5'>
                <Col md={3}>
                    {/* Left Column with Image */}
                    <div className='column'>
                        <img
                            src={ag715} // Replace with your actual image path
                            alt='fdsfsd'
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </Col>
                <Col md={9}>
                    {/* Right Column with Header and List */}
                   
                    <div className='column'>
                    <h3>AG-715 Ultrasonik Atak Kedi Köpek Kovucu</h3>
                        <ul>
                            <li>Ultrasonik frekans kedi köpek kovucu cihazlar insan kulağını rahatsız etmeyen ultrasonik sesler yayarak, Kedi, Köpek, Kurt, Tilki, Sansar vb hayvanları cihazın mote edildiği yerden kovmayı sağlar.</li>
                            <li>Köpek sahipleri ile saldırgan köpeklerden korunmak isteyen herkese Ultrasonik ses sayesinde köpek veya kedi ya olduğu yerde kalır ya da sizden uzaklaşır.</li>
                            <li>7 metreye kadar ulaşan sadece kedi ve köpekler tarafından duyulan ultrasonik frekans sesiyle kedi ve köpeklere zarar vermeden sizden uzaklaştırır.</li>
                            <li>Darbelere karşı dayanıklı bir plastikten üretilmiştir.</li>
                            <li>Kedi ve köpekleri ultrasonik frekans ses teknolojisi ile zarar vermeden kovabilirsiniz.</li>
                            <li>Sessizdir.</li>
                            <li>Kullanma Kılavuzu
                                <a href={samplePDF} target="_blank" rel="noopener noreferrer">
                                    <FaFilePdf size={30} />
                                </a>
                            </li>
                        </ul>
                    </div>
                
                </Col>
            </Row>    </Link>
        </Container>
    );
};

export default TwoColumnLayout;
