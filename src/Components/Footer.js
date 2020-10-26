import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Footer = () => {
    return ( 
        <Container fluid id = 'footer'>

            <Row>
                <Col sm = {4} id = 'address'>
                        <h5>
                            Shop address:
                        </h5>
                        <address>
                            Mayaki ndajiya, off Sauki junction
                            Bida, Niger State
                        </address>
                </Col> 
                <Col xs = {6} sm = {4} id = 'contact'>
                        <h5>Contact Us</h5>
                        <p>
                            <a href = 'mailto:tbestfashion@gmail.com' className = 'm-2'>
                                <i className = 'far fa-envelope text-danger'></i>
                            </a>
                            <a href = 'https://msng.link/o/?SirAdek=tg' className = 'm-2'>
                                <i className = 'fa fa-telegram text-primary'></i>
                            </a>
                            <a href = 'https://wa.link/5eju2e' className = 'm-2'>
                                <i className = 'fa fa-whatsapp text-success'></i>
                            </a>


                        </p>
                </Col >
                <Col xs = {6} sm = {4} id = 'copyright'>
                    <p>
                        &copy; TBESTFashion 2020 <br />
                            All Right reserved
                        </p>
                </Col>
            </Row>
            <Row>
                <Col id = 'dev' xm = {12}>
                <p>Made with <i className = 'fa fa-heart text-danger'></i> by Dev Adek</p>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Footer;