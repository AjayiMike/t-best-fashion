import React from 'react';

const Diff = (props) => {
    return (
        <div className = 'diff'>
                <div className = 'icon-container'>
                    <i className = {`fa fa-lg fa-${props.icon}`} style = {{fontSize: '45px', marginBottom: '20px'}} />
                </div>
                <div className = 'diff-text'>
                    <h4> {props.heading} </h4>
                    <p> {props.text} </p>
                </div>
            </div>
      );
}
 
export default Diff;