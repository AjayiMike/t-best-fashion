import React from "react";


const Actions = ({handleGetQuote}) => {
    return (
        <div className = "actions">
            <div className = "call">
                <p>
                <i className = "fa fa-phone"></i><a href = "tel:08032067046" > CALL</a>
                </p>
            </div>
            <div className = "get-quote" onClick = {handleGetQuote}>
                <p>
                    <i className = "fa fa-edit"></i> QUOTE 
                </p>
            </div>
            <div className = "get-direction">
                <p>
                    <i className = "fa fa-map-marker"></i> DIRECTION
                </p> 
            </div>
        </div>
    )
}

export default Actions;