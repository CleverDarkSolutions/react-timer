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
            inputValue: '0', // first number
            currentOperation: '', // operation in the middle
            secondInput: '', // second number
            whichInput: 'first' // input switching
        }
    }

    componentDidUpdate = () => {
        console.log(this.state)
    }

    changeInputs = () => { // input switching
        this.setState({
            whichInput: 'second'
        })

    }

    changeValue = (n) => {
        console.log('First: ' + this.state.inputValue)
        console.log('Second: ' + this.state.secondInput)

        if (this.state.whichInput == 'first') { // first number
            if (this.state.inputValue == '0') { // bug fixes when input equals 0
                if (n == '.') { //
                    this.setState({
                        inputValue: this.state.inputValue + n, // exception for comma
                        secondInput: ''
                    })
                }
                else { // preventing situations like 06
                    this.setState({
                        inputValue: n,
                        secondInput: ''
                    })
                }
            }

            else { // normal input
                this.setState({
                    inputValue: this.state.inputValue + n,
                    secondInput: ''
                })
            }
        }
        else {
            if (this.state.secondInput == '') { // second number
                if (n == '.') { 
                    this.setState({ // adding zero before comma
                        secondInput: '0' + n
                    })
                }
                else {
                    this.setState({
                        secondInput: n
                    })
                }
            }
            else if (this.state.secondInput == '0') { // preventing situations like 06
                this.setState({
                    secondInput: n
                })
            }
            else { // normal input
                this.setState({
                    secondInput: this.state.secondInput + n
                })
            }
        }
    }

    backSpace = () => { // deleting one character
        let str;
        if (this.state.whichInput == 'first') // first input
            str = this.state.inputValue;
        else // second input
            str = this.state.secondInput;

        if (str.length > 1) {
            str = str.substring(0, str.length - 1);
        }
        else {  // bugfix where substring() would get -1 index
            str = '';
        }
        console.log(str);
        if (this.state.whichInput == 'first') { // first input 
            if (this.state.inputValue.length == 1) { 
                this.setState({ // preventing deleting all characters
                    inputValue: '0'
                })
            }
            else {
                if (this.state.inputValue == '-') { // case for lone minus
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
        }

        else {
            if (this.state.secondInput < 10 && this.state.secondInput > 0) { // preventing instantly deleting second value
                this.setState({
                    secondInput: '0'
                })
            }

            else if (this.state.secondInput == '') { // deleting operation sign while second number is empty
                this.setState({
                    currentOperation: '',
                    whichInput: 'first'
                })
            }

            else {
                this.setState({
                    secondInput: str
                })
            }

        }
    }

    clear = (input) => {
        input = input.toString();
        this.setState({ // set to default state
            inputValue: input,
            currentOperation: '',
            secondInput: '',
            whichInput: 'first'
        })
    }
    /* co sie dzieje
        ifShorten = (str) => {
            str = str.toString();
            console.log("Strlen: "+str.length);
            let zeroCount = 0;
            for(let i=0;i<str.length;i++){
                console.log(zeroCount);
               if(str[i] == '0'){
                   zeroCount++;
                   console.log("oo")
               }
               else{
                   zeroCount = 0;
               }
            }
            console.log(zeroCount);
            return str.length - zeroCount;
        }
    */
    calculate = () => {
        let num1 = Number(this.state.inputValue); // converting from string to number
        let num2 = Number(this.state.secondInput);
        console.log(num1, num2);
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
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '%':
                result = num1 % num2;
        }
        result = result.toString(); // converting to string for easier input manipulation
        this.clear(result);
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

    add = () => {
        this.changeInputs();
        this.setState({
            currentOperation: '+'
        })
    }

    minus = () => {
        this.changeInputs();
        this.setState({
            currentOperation: '-'
        })
    }

    modulo = () => {
        this.changeInputs();
        this.setState({
            currentOperation: '%'
        })
    }

    addDecimalPoint = () => {
        if (this.state.whichInput == "first") {
            if (this.state.inputValue.includes('.') == false) { // preventing repeating comma in first number
                this.changeValue('.');
            }
        }
        else if (this.state.whichInput == "second" && this.state.secondInput != " ") { // as above 
            console.log(this.secondInput); // also preventing invalid use of includes() which result in crash 
            if (this.state.secondInput.includes('.') == false) {
                this.changeValue('.');
            }
        }
    }

    plusMinus = () => {
        let n = - this.state.inputValue
        n = n.toString();
        this.setState({
            inputValue: n
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

    squareRoot = () => {
        if (this.state.secondInput == '' && this.state.currentOperation == '') {
            let popoga;
            popoga = this.state.inputValue;
            popoga = Math.sqrt(popoga);
            popoga = popoga.toString();
            this.setState({
                inputValue: popoga
            })
        }
    }

    fact = (n) => { // base function for calculating factorial
        n = Number(n);
        if (Number.isInteger(n) == true && n<=500 && n>=0) { // avoiding too large numbers to prevent crash
            if (n == 0 || n == 1) { // and ruling out non-integers
                return 1;
            }
            else return this.fact(n - 1) * n;
        }
        else return n;
    }

    factorial = () => { // updating state using fact()
        if (this.state.secondInput == '' && this.state.currentOperation == '') {
            let popoga = this.state.inputValue;
            popoga = this.fact(popoga);
            popoga = popoga.toString();
            this.setState({
                inputValue: popoga
            })
        }
    }

    render() {
        return (
            <div style={divStyle} onKeyPress={this.handleKeyPressnpm}>
                <span id="numberInput" style={inputStyle}>
                    {this.state.inputValue}
                    {this.state.currentOperation}
                    {this.state.secondInput}
                </span><br></br>
                <Square color="outline-info" effect={() => { this.inverseNumber() }}>1/x</Square>
                <Square color="outline-info" effect={() => { this.powerTwo() }}>x^2</Square>
                <Square color="outline-info" effect={() => { this.squareRoot() }}>sqrt</Square>
                <Square color="outline-info" ></Square>
                <Square color="danger" effect={() => { this.clear(0) }}>C</Square>
                <br></br>
                <Square color="outline-dark" effect={() => { this.changeValue('7') }}>7</Square>
                <Square color="outline-dark" effect={() => { this.changeValue('8') }}>8</Square>
                <Square color="outline-dark" effect={() => { this.changeValue('9') }}>9</Square>
                <Square color="outline-info" effect={() => { this.modulo() }}>%</Square>
                <Square color="outline-info" effect={() => { this.backSpace() }}> bs</Square>
                <br></br>
                <Square color="outline-dark" effect={() => { this.changeValue('4') }}>4</Square>
                <Square color="outline-dark" effect={() => { this.changeValue('5') }}>5</Square>
                <Square color="outline-dark" effect={() => { this.changeValue('6') }}>6</Square>
                <Square color="outline-info" effect={() => { this.add() }}>+</Square>
                <Square color="outline-info" effect={() => { this.minus() }}>-</Square>
                <br></br>
                <Square color="outline-dark" effect={() => { this.changeValue('1') }}>1</Square>
                <Square color="outline-dark" effect={() => { this.changeValue('2') }}>2</Square>
                <Square color="outline-dark" effect={() => { this.changeValue('3') }}>3</Square>
                <Square color="outline-info" effect={() => { this.multiply() }}>*</Square>
                <Square color="outline-info" effect={() => { this.divide() }}>/</Square>
                <br></br>
                <Square color="outline-dark" effect={() => { this.addDecimalPoint() }}>.</Square>
                <Square color="outline-dark" effect={() => { this.changeValue('0') }}>0</Square>
                <Square color="outline-dark" effect={() => { this.plusMinus() }}>+/-</Square>
                <Square color="outline-info" effect={() => { this.factorial() }}>n!</Square>
                <Square color="success" effect={() => { this.calculate() }}>=</Square>
            </div>
        )
    }
}

export default calculatorPad;