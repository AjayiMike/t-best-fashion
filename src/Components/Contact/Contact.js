import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import contactHeadrImg from './images/t-best-fashion-contact-header-image.jpg';
import proxyServer from "../../proxyServerLink";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // setting the page title on page first load
    useEffect(() => {
        document.title = "T-Best Fashion | Contact us";
    }, []);

    // input change handler
    const handleFormInputChange = (e) => {
        const errorMessageEl = document.querySelector(".errorMessage");
        const targetInput = e.target;
        if(errorMessageEl.innerText === `Ops! something went wrong, please try again later`)
            errorMessageEl.innerText = "";
        switch(targetInput.name) {
            case("name") :
                if(errorMessageEl.innerText === `all fields are required`) {
                    errorMessageEl.innerText = "";
                    errorMessageEl.classList.remove("showErrorMessage");
                }
                setName(targetInput.value)
                break;
            case("email") :
                if(errorMessageEl.innerText === "Invalid email address") {
                    errorMessageEl.innerText = "";
                    errorMessageEl.classList.remove("showErrorMessage");
                }
                setEmail(targetInput.value)
                break;
            case("message") :
                if(errorMessageEl.innerText === `all fields are required`) {
                    errorMessageEl.innerText = "";
                    errorMessageEl.classList.remove("showErrorMessage");
                }
                setMessage(targetInput.value)
                break;
            default:
                break;
        }
    }

    // onsubmit validator 
    const handleSubmit = (e) => {
        e.preventDefault();
        const errorMessageEl = document.querySelector(".errorMessage");
        const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!name || !email || !message) {
            errorMessageEl.innerText = `all fields are required`;
            errorMessageEl.classList.add("showErrorMessage");
        } else {
            if(emailPattern.test(email)) {
                const messageBody = {
                    name,
                    email,
                    message
                }
                sendMessage(messageBody)
            }else {
                errorMessageEl.innerText = "Invalid email address!";
                errorMessageEl.classList.add("showErrorMessage");
            }
        }
        
    }


    // send message handler
    const sendMessage = (message) => {
        const submitBtn = document.querySelector(".submit-btn");
        const errorMessageEl = document.querySelector(".errorMessage");
        submitBtn.innerHTML = "<i class='fas fa-spinner fa-spin'></i>";
        const options = {
            method: "POST",
            body: JSON.stringify(message),
            header: {
                "content-type": "application/json; charset=UTF-8"
            }
        };
        
        fetch(`${proxyServer}https://formspree.io/f/xjvpovwo`, options)
        // had to make the request through a proxy server so the browser can access the response sent back
        .then(res => {
            // the response is already in javascript object form, so no need to convert it
            if(res.status === 200) {
                document.querySelector(".msgSentModal-container").classList.add("show-msgSentModal");
                // clear the input fields and reset the state
                    document.querySelector("#name").value = "";
                    document.querySelector("#email").value = "";
                    document.querySelector("#message").value = "";
                    setName("");
                    setEmail("");
                    setMessage("");
                    submitBtn.innerHTML = "SEND";
            }else {
                errorMessageEl.innerText = "Ops! something went wrong, please try again later";
                errorMessageEl.classList.add("showErrorMessage");
                submitBtn.innerHTML = "SEND";
            }
        }).catch(err => {
            errorMessageEl.innerText = "Ops! something went wrong, please try again later";
            errorMessageEl.classList.add("showErrorMessage");
            submitBtn.innerHTML = "SEND";
        })
    }

    // close the success modal and reset the state and the input fields
    const handleCloseMsg = () => {
        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#message").value = "";
        setName("");
        setEmail("");
        setMessage("");
        document.querySelector(".msgSentModal-container").classList.remove("show-msgSentModal");
    }

    return ( 
        <Container fluid className = 'main-container' id = 'contact-page' >
            <Row>
                <Col xs = {12} className = "contact-header-container">
                    <Image
                    className = 'contact-header'
                    src = {contactHeadrImg}
                    alt = 't-best-fashion contact header image'
                    />
                    <div className = "contact-header-overlay">
                        <h2>CONTACT US</h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col  xs = {12}  md = {6}>
                    <div id = 'address'>
                        <h4>Shop address</h4>
                        <p>Mayaki Ndajiya area,<br />
                        off Sauki junction, bida Niger state, Nigeria</p>
                    </div>
                </Col>
                <Col xs = {12}  md = {6}>
                    <div id = 'opening-hours'>
                        <h4>Opening hours</h4>
                        <p>Mon - Sat (8am - 7pm)<br />
                        Sun (3pm - 8pm)</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs = {12}  md = {6}>
                    <div id = 'contact-info'>
                        <p><i className = 'far fa-envelope text-danger'></i> officialtbestfashion@gmail.com</p>
                        <p><i className = 'fa fa-phone text-primary'></i> 08064471819</p>
                    </div>
                </Col>
                <Col xs = {12}  md = {6}>
                    <div id = 'socials'>
                             <a href = 'mailto:officialtbestfashion@gmail.com' className = 'm-2'>
                                <i className = 'far fa-envelope text-danger'></i>
                            </a>
                            <a href = 'https://msng.link/o/?MrTbest=tg' className = 'm-2'>
                                <i className = 'fa fa-telegram text-primary'></i>
                            </a>
                            <a href = 'https://wa.link/5eju2e' className = 'm-2'>
                                <i className = 'fa fa-whatsapp text-success'></i>
                            </a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs = {12} id = 'form-section'>
                    <h4>You can also reach us through this form</h4>
                    <form id = 'contact-form'>
                        <p className = "errorMessage"></p>
                        <label htmlFor = 'name'>Name:*</label>
                        <input type = 'text' name = 'name' placeholder = 'Jane Reo' id = 'name' onChange = {(e) => handleFormInputChange(e)} />
                        <label htmlFor = 'email'>Email:*</label>
                        <input type = 'email' name = 'email' id = 'email' placeholder = 'janereo@yahoo.com' onChange = {(e) => handleFormInputChange(e)} />
                        <label htmlFor = 'message'>Your Message:*</label>
                        <textarea id = 'message' name = 'message'placeholder = 'Your message...' onChange = {(e) => handleFormInputChange(e)}></textarea>
                        <button className = "submit-btn" onClick = {handleSubmit}>submit</button>
                    </form>
                    <div className = "msgSentModal-container">
                            <div className = "msgSentModal">
                                <div className = "close-button" onClick = {handleCloseMsg}>✕</div>
                                <p>Thank you for contacting us, we will get back to you soon</p>
                            </div>
                    </div>
                </Col>
            </Row>
        </Container>
        
     );
}

export default Contact;