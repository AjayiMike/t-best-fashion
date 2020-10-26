import React from 'react';
import {Link} from 'react-router-dom';


const ServiceComp = (props) => {
    return ( 
        <div className = 'service-card'>
            <h4 className = 'service-type'>{props.serviceType}</h4>
            <p className = 'service-description'>{props.serviceDescription}</p>
            <Link to = '/contact'>
                <button className = 'service-btn'>contact us</button>
            </Link>
        </div>
     );
}
 
export default ServiceComp;