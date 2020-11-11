import React from 'react';

const Diff = ({icon, heading, text}) => {
    return (
        <div className = 'diff'>
                <div className = 'icon-container'>
                    <i className = {`fa fa-lg fa-${icon}`} style = {{fontSize: '45px', marginBottom: '20px'}} />
                </div>
                <div className = 'diff-text'>
                    <h4> {heading} </h4>
                    <p> {text} </p>
                </div>
            </div>
      );
}
 
export default Diff;