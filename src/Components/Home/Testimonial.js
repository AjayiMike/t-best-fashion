import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

const Testimonial = ({image, text, name, profession}) => {
    return ( 
        <Container id = 'card'>
            <Row>
                <Col xs = {12} id = 'person' className = 'd-flex justify-content-center'>
                    <Image
                    src = {image}
                    alt = 'testifier'
                    width = '100px'
                    height = '100px'
                    roundedCircle />
                </Col>    
            </Row>
            <Row>
                <Col>

                    <blockquote>
                        <i className = "fa fa-quote-left"></i>
                        {text}
                    </blockquote>
                    <div id = 'personal-info'>
                        <h3>{name}</h3>
                        <p>{profession}</p>
                    </div>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Testimonial;