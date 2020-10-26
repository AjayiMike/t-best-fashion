import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
    return ( 
        <Container fluid className = 'main-container' id = 'contact-page' >
            <Row>
                <Col xs = {12}>
                    <h1>GET IN TOUCH WITH US</h1>
                </Col>
            </Row>
            <Row>
                <Col  xs = {12}  sm = {6}>
                    <div id = 'address'>
                        <h4>Shop address</h4>
                        <p>Mayaki Ndajiya area,<br />
                        off Sauki junction, bida Niger state</p>
                    </div>
                </Col>
                <Col xs = {12}  sm = {6}>
                    <div id = 'opening-hours'>
                        <h4>Opening hours</h4>
                        <p>Mon - Sat (8am - 7pm)<br />
                        Sun (3pm - 8pm)</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs = {12}  sm = {6}>
                    <div id = 'contact-info'>
                        <p>PHONE: 08064471819</p>
                        <p>EMAIL: tbestfashion@gmail.com</p>
                    </div>
                </Col>
                <Col xs = {12}  sm = {6}>
                    <div id = 'Socials'>
                        social icons
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs = {12} id = 'form-section'>
                    <h4>You can also reach us through this form</h4>
                    <form id = 'contact-form'>
                        <label htmlFor = 'name'>Name:</label>
                        <input type = 'text' name = 'name' placeholder = 'Jane Reo' id = 'name' />
                        <label htmlFor = 'email'>Email:</label>
                        <input type = 'email' name = 'email' id = 'email' placeholder = 'janereo@yahoo.com' />
                        <label htmlFor = 'text-area'>Your Message:</label>
                        <textarea id = 'text-area' name = 'textarea'></textarea>
                        <input type = 'submit' value = 'send' />
                    </form>
                </Col>
            </Row>
        </Container>
        
     );
}
 
export default Contact;