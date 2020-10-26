import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServiceComp from './ServiceComp'

const Services = () => {
    return ( 
        <Container fluid className = 'main-container'>
            <Row>
                <Col id = 'services'>
                    <h1 id = 'services-heading'>Our Services</h1>

                    <ServiceComp />
                    
                </Col>
            </Row>
        </Container>
     );
}
 
export default Services;