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

    componentDidUpdate = () => {
        console.log(this.state)
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

        if (this.state.whichInput == 'first') {
            if (this.state.inputValue == '0') {
                this.setState({
                    inputValue: n,
                    secondInput: ''
                })
            }
            else {
                this.setState({
                    inputValue: this.state.inputValue + n,
                    secondInput: ''
                })
            }
        }
        else {
            if (this.state.secondInput == '0') {
                this.setState({
                    secondInput: n
                })
            }
            else {
                this.setState({
                    secondInput: this.state.secondInput + n
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
        let num1 = Number(this.state.inputValue);
        let num2 = Number(this.state.secondInput);
        let sign = this.state.currentOperation;
        let result = 0;

        switch (sign) {
            default:
                break;
            case '/':
                result = num1 / num2;
                break;
            case '*':
                result = num1 * num2;
                break;
        }
        result = result.toFixed(5);
        result = result.toString();
        this.setState({
            inputValue: result,
            currentOperation: '',
            secondInput: '',
            whichInput: 'first'
        })

    }

    divide = () => {
        this.changeInputs();
        this.setState({
            currentOperation: '/'
        })
    }

    multiply = () => {
        this.changeInputs();
        this.setState({
            currentOperation: '*'
        })
    }

    addDecimalPoint = () => {
        if (this.state.whichInput == "first") {
            if (this.state.inputValue.includes('.') == false) {
                this.changeValue('.');
            }
        }
        else {
            if (this.state.secondInput.includes('.') == false) {
                this.changeValue('.');
            }
        }
    }

    plusMinus = () => {
        this.setState({
            inputValue: - this.state.inputValue
        })
    }

    inverseNumber = () => {
        if (this.state.whichInput == "first") {
            this.setState({
                inputValue: 1 / this.state.inputValue
            })
        }
        else {
            this.setState({
                secondInput: 1 / this.state.secondInput
            })
        }
    }

    powerTwo = () => {
        if (this.state.secondInput == '' && this.state.currentOperation == '') {
            let popoga = this.state.inputValue * this.state.inputValue;
            popoga = popoga.toString();
            this.setState({
                inputValue: popoga
            })
        }
    }

    render() {
        return (
            <div style={divStyle}>
                <span id="numberInput" style={inputStyle}>
                    {this.state.inputValue}
                    {this.state.currentOperation}
                    {this.state.secondInput}
                </span><br></br>
                <Square effect={() => { this.inverseNumber() }}>1/x</Square>
                <Square effect={() => { this.powerTwo() }}>x^2</Square>
                <Square ></Square>
                <Square ></Square>
                <br></br>
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
                <Square effect={() => { this.multiply() }}>x</Square>
                <br></br>
                <Square effect={() => { this.addDecimalPoint() }}>.</Square>
                <Square effect={() => { this.changeValue('0') }}>0</Square>
                <Square effect={() => { this.plusMinus() }}>+/-</Square>
                <Square effect={() => { this.calculate() }}>=</Square>
            </div>
        )
    }
}

export default calculatorPad;