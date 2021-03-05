import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Square from './calculatorSquare';

let divStyle = {
    position: 'relative',
    top: '1em'
}

let inputStyle = {
    width: '20em',
    fontSize: '5em'
}

class calculatorPad extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '0',
            currentOperation: '',
            secondInput: '',
            whichInput: 'first'
        }
    }

    changeInputs = () => {
        if (this.state.whichInput == 'first') {
            this.setState({
                whichInput: 'second'
            })
        }
        else {
            this.setState({
                whichInput: 'first'
            })
        }
    }

    changeValue = (n) => {
        console.log('First: ' + this.state.inputValue)
        console.log('Second: ' + this.state.secondInput)

        if(this.state.whichInput == 'first'){
            if(this.state.inputValue == '0'){
                this.setState({
                    inputValue : n,
                    secondInput : ''
                })
            }
            else{
                this.setState({
                    inputValue : this.state.inputValue + n
                })
            }
        }
        else{
            if(this.state.secondInput == '0'){
                this.setState({
                    secondInput : n
                })
            }
            else{
                this.setState({
                    secondInput : this.state.secondInput + n
                })
            }
        }
    }

    backSpace = () => {
        let str;
        if (this.state.whichInput == 'first')
            str = this.state.inputValue;
        else
            str = this.state.secondInput;

        str = str.substring(0, str.length - 1);
        console.log(str);
        if (this.state.whichInput == 'first') {
            if (this.state.inputValue < 10) {
                this.setState({
                    inputValue: '0'
                })
            }
            else {
                this.setState({
                    inputValue: str
                })
            }
        }
        else {
            if (this.state.secondInput < 10) {
                this.setState({
                    secondInput: '0'
                })
            }
            else {
                this.setState({
                    secondInput: str
                })
            }

        }
    }

    calculate = () => {
        
    }

    divide = () => {
        this.changeInputs();
        this.setState({
            currentOperation: '/'
        })
    }

    render() {
        return (
            <div style={divStyle}>
                <span id="numberInput" style={inputStyle}>
                    {this.state.inputValue}
                    {this.state.currentOperation}
                    {this.state.secondInput}
                </span><br></br>
                <Square effect={() => { this.changeValue('7') }}>7</Square>
                <Square effect={() => { this.changeValue('8') }}>8</Square>
                <Square effect={() => { this.changeValue('9') }}>9</Square>
                <Square effect={() => { this.backSpace() }}>bs</Square>
                <br></br>
                <Square effect={() => { this.changeValue('4') }}>4</Square>
                <Square effect={() => { this.changeValue('5') }}>5</Square>
                <Square effect={() => { this.changeValue('6') }}>6</Square>
                <Square effect={() => { this.divide() }}>/</Square>
                <br></br>
                <Square effect={() => { this.changeValue('1') }}>1</Square>
                <Square effect={() => { this.changeValue('2') }}>2</Square>
                <Square effect={() => { this.changeValue('3') }}>3</Square>
            </div>
        )
    }
}

export default calculatorPad;