import React from 'react';
import './Center.css';

function center({props}) {
    return (
        <div className="center">
            {props.children}
        </div>
    )
}

export default center
