import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import img from '../../assets/tape.jpg';
import Diff from '../Home/Diff';


const About = () => {
    return ( 
        <Container fluid className = 'main-container'id = 'about-page'>
            <Row>
                <Col xs = {12}>
                    <div className = "img">
                        <img src = {img} alt = "tailorin tape"/>
                    </div>
                </Col>
                <Col xs = {12}>
                <div id = 'difference'>
                <Diff icon = 'lightbulb' heading = "We are creative" text = "All our styles are originaly created by us. we are highly skillled at designs"/>
                <Diff icon = 'briefcase' heading = "We are professionals" text = "Your works are handled by professionals. you can be rest assured to get the best"/>
                <Diff icon = 'clock' heading = "We are timely" text = "we start working on your clothes as soon as posible so as to be able to deliver them on time"/>
            </div>
                </Col>
                <Col>
                    <h1>Who we are</h1>
                    <div id = 'about-body'>
                        <p>
                            T-BEST fashion prides itself in quality and timely services that are being rendered by top-notch
                            profeshionals, each with at least eight(8) years experience in the fashion industry.
                        </p>
                        <p>
                            We make you your desired outfit by paying attention to details of your specification and also offer
                            professional advice and suggestion when necessary so as to end up with not just a desired outfit but
                            also a comfortable one.
                        </p>
                        <p>
                            Our specialties ranges from making quality native wears, that are well suited for all traditional
                            functions like weddings and other traditional ceremonies to coporate wears that are suitable for official
                            functions.
                        </p>
                        <p>
                            Our services also include contract sewing of any type of uniform in bulk, alteration of garment to your utmost taste.
                            We are also available for express service
                        </p>
                    </div>
                    <Link to = '/contact'>
                        <button>Get in touch</button>
                    </Link>
                </Col>
            </Row>
        </Container>
     );
}
 
export default About;