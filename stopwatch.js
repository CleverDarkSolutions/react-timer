import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import ResultsTable from './resultsTable';

let styleStopwatch = {
    fontSize: '10em'
}


let beginDate = 0;
let isStopped = false;
let count = 1;

let resultArray = [];

class Stopwatch extends Component {
    state = {
        currentTime: 0,
        ifPaused: false,
        pausedMoment: 0,
    }

    setTime = (time) => {
        this.setState({
            currentTime: time
        })
    }

    pause = () => {
        document.getElementById('buttonPause').disabled = true;
        document.getElementById('buttonResume').disabled = false;
        this.setState({
            ifPaused: true,
            pausedMoment: new Date().getTime()
        })
    }

    resume = () => {
        document.getElementById('buttonPause').disabled = false;
        document.getElementById('buttonResume').disabled = true;
        this.setState({
            ifPaused: false
        })
    }

    stop = () => {
        document.getElementById('buttonStop').disabled = true;
        document.getElementById('buttonStart').disabled = false;
        document.getElementById('buttonPause').disabled = false;
        isStopped = true;
        this.setState({
            currentTime: 0,
            ifPaused: false
        })
    }

    measure = () => {
        let popoga = this.state.currentTime;
        resultArray.push(popoga);
        count++;
    }

    clearTable = () => {
        return resultArray = [];
    }

    start = () => {
        document.getElementById('buttonStart').disabled = true;
        document.getElementById('buttonStop').disabled = false;
        isStopped = false;
        beginDate = new Date().getTime();
        let num;
        let finalNum;
        let pauseTime = 0;
        const interval = setInterval(() => {
            if (isStopped == false) {
                if (this.state.ifPaused == false) {
                    beginDate += pauseTime;
                    pauseTime = 0;

                    num = new Date().getTime() - beginDate;
                    finalNum = num / 1000;
                    finalNum = finalNum.toFixed(2);
                    this.setTime(finalNum);
                }
                else {
                    pauseTime = new Date().getTime() - this.state.pausedMoment;
                }
            }
            else {
                isStopped = true;
                return clearInterval(interval);
            }
        }, 1);
    }

    render() {
        return (
            <div>
                <div style={styleStopwatch}>
                    {this.state.currentTime}
                </div>
                <Button id="buttonStart" className="but1" variant="success" onClick={() => { this.start() }}>Start</Button>
                <Button id="buttonPause" className="but1" variant="secondary" onClick={() => { this.pause() }}>Pause</Button>
                <Button id="buttonResume" className="but1" variant="secondary" onClick={() => { this.resume() }}>Resume</Button>
                <Button id="buttonStop" className="but1" variant="danger" onClick={() => { this.stop() }}>Stop</Button>
                <Button className="but1" onClick={() => { this.measure() }}>Measure</Button>
                <Button className="but1" onClick={() => { this.clearTable() }}>Clear table</Button>

                <ResultsTable count={count} results={resultArray}></ResultsTable>
            </div>
        )
    }
}

export default Stopwatch;

