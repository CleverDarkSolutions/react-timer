import React from 'react';
import { Button } from 'react-bootstrap';

let buttonStyle = {
    width: '6em',
    height: '6em',
    margin: '0.2em'
}

let digitStyle = {
    fontSize: '3em'
}


const Backspace = (props) => {
    return (
        <Button className='btn btn-dark' style={buttonStyle}><span style={digitStyle}>{props.children}</span></Button>
    )
}

export default Backspace