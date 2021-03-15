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
        <Button variant={props.color} onClick={props.effect} style={buttonStyle}><span style={digitStyle}>{props.children}</span></Button>
    )
}

export default Square;