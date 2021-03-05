import React,{Component} from 'react';
import CalculatorPad from './calculatorPad';
import changeInputValue from './calculatorSquare';

class Calculator extends Component{
    render(){
        return(
            <div>
                <CalculatorPad></CalculatorPad>
            </div>
        )
    }

}

export default Calculator