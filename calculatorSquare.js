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

const Square = (props) => {
    return (
        <Button onClick={props.effect} className='btn btn-dark' style={buttonStyle}><span style={digitStyle}>{props.children}</span></Button>
    )
}

export default Square;