import React from 'react';
import SuitMannequin from '../../assets/new.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Testimonial from './Testimonial';
import Man from '../../assets/suit10.jpg';
import Diff from "./Diff.js";
import {Link} from 'react-router-dom';


const Home = () => {
    return ( 
        <Container fluid className = 'main-content'>
            <div id = 'jumbo'>
                <Container fluid id = 'content' >
                    <Row>
                        <Col xs = {12} md lg = {6} className = 'd-flex justify-content-center' >
                            <Image
                            id = 'jumbo-img'
                            src = {SuitMannequin}
                            alt = 'suit'
                            />
                        </Col>
                        <Col xs sm = {12} md lg xl ={6}>
                            <h1>GET THOSE AMAZING AND ELEGANT OUTFIT YOU'VE ALWAYS WANTED</h1>
                            <p>Have you been searching for the best fashion designer that is up to the task of getting you that amazing outfit you have in mind?
                            look no further, we got you covered </p>
                            <Link to = '/services'>
                                <button id = 'learn-more' >Learn More</button>
                            </Link>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
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
                <div id = "testimon-container">

                    <Testimonial id = "testimon0" image = {Man} name = 'John Doe' profession = 'Architect' text = 'T-Best fashion is the best in fashion designs. very talented with diverse styles in design matter. i have never regret choosing them over other fashion designers out there' />
                   
                </div>
            </div>

            <div  id = 'not-sure'>
                <h5>NOT SURE WHAT STYLE YOU WANT? </h5>
                <p>we got you, talk to us let's help you pick the best style</p>
                <button className  = 'btn'>HERE</button>
            </div>
        </Container>
    );
}
 
export default Home;