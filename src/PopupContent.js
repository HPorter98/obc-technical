import React from 'react';

function PopupContent(props) {
    return (
        <div className='popup'>
            <p>Heat: {props.exceedence.SCORE}</p>
            <p>Position: {props.exceedence.POSITION_YARDS}</p>
            <p>Time: {props.exceedence.TIME}</p>
        </div>
    )
}

export default PopupContent;