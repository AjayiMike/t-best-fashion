import React, {useState} from "react";
import proxyServer from "../../proxyServerLink";


const GetQuote = ({handleGetQuote}) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // input change handler
    const handleFormInputChange = (e) => {
        const targetInput = e.target;
        const statusMessageEl = document.querySelector(".statusMessage");
        if(statusMessageEl.innerText === `Ops! something went wrong, please try again later`) {
            statusMessageEl.innerText = "";
        }
        switch(targetInput.name) {
            case("name") :
                if(statusMessageEl.innerText === `all fields marked "*" are required`) {
                    statusMessageEl.innerText = "";
                }
                setName(targetInput.value)
                break;
            case("email") :
                if(statusMessageEl.innerText === "Invalid email address") {
                    statusMessageEl.innerText = "";
                }
                setEmail(targetInput.value)
                break;
            case("message") :
                if(statusMessageEl.innerText === `all fields marked "*" are required`) {
                    statusMessageEl.innerText = "";
                }
                setMessage(targetInput.value)
                break; 
            case("phone") :
            setPhone(targetInput.value)
            break;
            default:
                break;
        }
    }

     // onsubmit validator 
    const handleSubmit = (e) => {
        e.preventDefault();
        const statusMessageEl = document.querySelector(".statusMessage");
        const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!name || !email || !message) {
            statusMessageEl.innerText = `all fields marked "*" are required`;
        } else {
            if(emailPattern.test(email)) {
                const messageBody = {
                    name,
                    email,
                    phone,
                    message
                }
                sendMessage(messageBody)
            }else {
                statusMessageEl.innerText = "Invalid email address";
            }
        }
        
    }

    // send message and close the modal after that
    const sendMessage = (message) => {
        const statusMessageEl = document.querySelector(".statusMessage");
        document.querySelector(".submit-btn").innerHTML = "<i class = 'fa fa-sync-alt fa-spin'></i>";
        const options = {
            method: "POST",
            body: JSON.stringify(message),
            header: {
                "content-type": "application/json; charset=UTF-8",
            }
        };

        fetch(`${proxyServer}https://formspree.io/f/xknpznwo`, options)
        // had to make the request through a proxy server so the browser can access the response sent back
        .then(data => {
            // the response is already in javascript object form, so no need to convert it
            if(data.status === 200) {
                statusMessageEl.style.color = "#0f0";
                statusMessageEl.innerHTML = `message sent successfully <i class = 'fa fa-check-circle'></i>`;
                // clear the input fields, reset the state and close the modal
                setTimeout(() => {
                    statusMessageEl.style.color = "#f00";
                    statusMessageEl.innerText = "";
                    document.querySelector("#name").value = "";
                    document.querySelector("#email").value = "";
                    document.querySelector("#message").value = "";
                    document.querySelector("#phone").value = "";
                    setName("");
                    setEmail("");
                    setMessage("");
                    setPhone("");
                    handleGetQuote()
                }, 2000)
                document.querySelector(".submit-btn").innerHTML = "SEND";
            }else {
                statusMessageEl.style.color = "#foo";
                statusMessageEl.innerHTML = `Ops! something went wrong, please try again later`;
                document.querySelector(".submit-btn").innerHTML = "SEND";
            }
        }).catch(err => {
            statusMessageEl.style.color = "#foo";
            statusMessageEl.innerHTML = `Ops! something went wrong, please try again later`;
            document.querySelector(".submit-btn").innerHTML = "SEND";
        })
    }

    return (
        <div className = "get-quote-modal-container">
            <div className = "get-quote-modal">
                <div className = "close-button" onClick = {handleGetQuote}>✕</div>
                <h1>GET QUOTE</h1>
                <p className = "statusMessage"></p>
                <form>
                    <label htmlFor = "name">NAME*</label>
                    <input type = "text" id = "name" name = "name" placeholder = "Name*" onChange = {(e) => handleFormInputChange(e)}/>
                    <label htmlFor = "phone">PHONE</label>
                    <input type = "text" id = "phone" name = "phone" placeholder = "Phone" onChange = {(e) => handleFormInputChange(e)} />
                    <label htmlFor = "email">EMAIL*</label>
                    <input type = "email" id = "email" name = "email" placeholder = "Email*" onChange = {(e) => handleFormInputChange(e)}/>
                    <label htmlFor = "message">TALK WITH US*</label>
                    <textarea id = "message" name = "message" onChange = {(e) => handleFormInputChange(e)} placeholder = "write to us about the discription and specification of the clothe you want...*"></textarea>
                    <button className = "submit-btn" onClick = {e => handleSubmit(e)}>SEND</button>
                </form>
            </div>
        </div>
    )
}

export default GetQuote;