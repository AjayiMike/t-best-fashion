import React, {useState, useEffect} from 'react';
import SuitMannequin from './images/t-best-fashion-header-image.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Diff from "./Diff.js";
import Actions from "./Actions.js"
import GetQuote from "./GetQuote.js"
import {Link} from 'react-router-dom';
import TestimonialCarousel from "./TestimonialCarousel.js"





const Home = () => {
    const [showGetQuote, setShowGetQuote] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(true);

    useEffect(() => {
        document.title = "T-Best Fashion";
        if(window.screen.width >= 992)
            setIsSmallScreen(false);
    }, []);

    const onResize = () => {
        if (window.screen.width >= 992) {
            setIsSmallScreen(false);
        } else {
            setIsSmallScreen(true);
        }
    }

    window.addEventListener("resize", onResize);
    
    const trigerGetQuote = () => {
        if(showGetQuote) {
            document.querySelector(".get-quote-modal-container").classList.remove("showGetQuote")
            setShowGetQuote(false)
        }else {
            document.querySelector(".get-quote-modal-container").classList.add("showGetQuote")
            setShowGetQuote(true)
        }
    }
    return ( 
        <>
            <Container fluid className = 'main-content'>
                    <Container fluid id = 'jumbo' className = "m-auto" >
                        <Row className = 'd-flex justify-content-center'>
                            <Col xs = {12} md lg = {5} className = 'd-flex justify-content-center'>
                                <Image
                                id = 'jumbo-img'
                                src = {SuitMannequin}
                                alt = 'suit'
                                />
                            </Col>
                            <Col xs sm = {12} md lg xl ={7} className = 'jumbo-text-section'>
                                {!isSmallScreen  ? <Actions handleGetQuote = {trigerGetQuote}/> : ""}
                                <div className = "jumbo-text">
                                    <h1>GET THOSE AMAZING AND ELEGANT OUTFIT YOU'VE ALWAYS WANTED</h1>
                                    <p>Have you been searching for the best fashion designer that is up to the task of getting you that amazing outfit you have in mind?
                                    look no further, we got you covered </p>
                                    <Link to = '/about'>
                                        <button id = 'learn-more' >Learn More</button>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                <div id = 'difference'>
                    <h2>WHAT SETS US APART</h2>
                    <Diff icon = 'lightbulb' heading = "We are creative" text = "All our styles are originaly created by us. we are highly skillled at designs"/>
                    <Diff icon = 'briefcase' heading = "We are professionals" text = "Your works are handled by professionals. you can be rest assured to get the best"/>
                    <Diff icon = 'clock' heading = "We are timely" text = "we start working on your clothes as soon as posible so as to be able to deliver them on time"/>
                    <Diff icon = 'handshake' heading = "Quality customer relations" text = "we build good relationships with our customers so as to be able to know what their needs are"/>
                </div>
                
                <div id = 'testimonies'>
                    <h4>EVER HEARD THE SAYING THAT HAPPY CUSTOMERS ARE YOUR BIGGEST ADVOCATE?</h4>
                    <p>this is what our customers are saying about us</p>
                    <TestimonialCarousel />
                </div>

                <div  id = 'not-sure'>
                    <h5>NOT SURE WHAT STYLE YOU WANT? </h5>
                    <p>we got you, check out the collection of various styles</p>
                    <Link to = "/styles-gallery">
                        <button className  = 'btn'>GALLERY <i className = "fa fa-sign-in"></i></button>
                    </Link>
                    
                </div>
            </Container>
            <GetQuote handleGetQuote = {trigerGetQuote}/>
            {isSmallScreen  ? <Actions handleGetQuote = {trigerGetQuote}/> : ""}
        </>
    );
}
 
export default Home;