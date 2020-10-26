import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

const Testimonial = (props) => {
    return ( 
        <Container id = 'card'>
            <Row>
                <Col xs sm = {12} id = 'person'>
                    <Image
                    src = {props.image}
                    alt = 'testifier'
                    width = '70px'
                    height = '70px'
                    roundedCircle />
                    <div id = 'personal-info'>
                        <h5>{props.name}</h5>
                        <p>{props.profession}</p>
                    </div>
                </Col>    
            </Row>
            <Row>
                <Col offset = {2}>
                    <blockquote>{props.text}</blockquote>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Testimonial;