import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import headerImage from "./images/t-best-fashion-about-us-header-image-2.jpg";
import galleryImage1 from "./images/t-best-fashion-about-us-image-1.jpg";
import galleryImage2 from "./images/t-best-fashion-about-us-image-2.jpg";
import galleryImage3 from "./images/t-best-fashion-about-us-image-3.jpg";
import galleryImage4 from "./images/t-best-fashion-about-us-image-4.jpg";
import galleryImage5 from "./images/t-best-fashion-about-us-image-5.jpg";
import customerRelationImage from "./images/t-best-fashion-customer-relation-image.jpg";


const About = () => {

    // setting the page title on page first load
    useEffect(() => {
        document.title = "T-Best Fashion | About";
    }, []);
    
    return ( 
        <Container fluid className = 'main-container'id = 'about-page'>
            <div className = "about-us-page-header">
                <Image
                className = 'about-us-header-image'
                src = {headerImage}
                alt = 't-best-fashion about header image'
                />
                <h2>WHO WE ARE</h2>
                <p>what we do...</p>
            </div>
            <Row>
                <Col>
                    <div className = 'about-body'>
                        <h2>T-BEST FASHION IS A FASHION DESIGN AND TAILORING INDUSTRY</h2>
                        <p>
                            We pride ourselve in quality and timely services that are being rendered by top-notch
                            profeshionals, each with at least eight(8) years experience in the fashion industry.
                        </p>
                        <div className = "about-us-gallery">
                            <div className = "image-container">
                                <Image
                                className = 'about-us-gallery-image'
                                src = {galleryImage1}
                                alt = 't-best-fashion about us image'
                                />
                            </div>
                            <div className = "image-container">
                                <Image
                                className = 'about-us-gallery-image'
                                src = {galleryImage5}
                                alt = 't-best-fashion about us image'
                                />
                            </div>
                            <div className = "image-container">
                                <Image
                                className = 'about-us-gallery-image'
                                src = {galleryImage3}
                                alt = 't-best-fashion about us image'
                                />
                            </div>
                            <div className = "image-container">
                                <Image
                                className = 'about-us-gallery-image'
                                src = {galleryImage4}
                                alt = 't-best-fashion about us image'
                                />
                            </div>
                            <div className = "image-container">
                                <Image
                                className = 'about-us-gallery-image'
                                src = {galleryImage2}
                                alt = 't-best-fashion about us image'
                                />
                            </div>

                        </div>
                        <p>
                            We make you your desired outfit by paying attention to details of your specification and also offer
                            professional advice and suggestion when necessary so as to end up with not just a desired outfit but
                            also a comfortable one.
                        </p>
                        <div className = "customer-relation-image-container">
                            <Image
                            className = 'customer-relation-image'
                            src = {customerRelationImage}
                            alt = 't-best-fashion customer relation'
                            />
                        </div>
                        <p>
                            Our specialties ranges from making quality native wears, that are well suited for all traditional
                            functions like weddings and other traditional ceremonies to coporate wears that are suitable for official
                            functions.
                        </p>
                        <p>
                            Our services also include contract sewing of any type of uniform in bulk, alteration of garment to your utmost taste.
                            We are also available for express service
                        </p>
                        <Link to = '/contact'>
                        <button className =  "contact-us-button">Get in touch</button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
     );
}
 
export default About;