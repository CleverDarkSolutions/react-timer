import logo from './logo.svg';
import './App.css';
import Timer from './timer';
import TimerDisplay from './timerDisplay';
import Feedback from './feedback';
import React, { Component, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

let isRunning = false;
let isPaused = false;

class TimerTotal extends Component {

    state = {
        date: 0,
        hours: 0,
        minutes: 0,
        showTime: true
    }

    setSeconds = (event) => {
        this.setState({
            date: event.target.value
        })
    }

    setHours = (event) => {
        this.setState({
            hours: event.target.value
        })
    }

    setMinutes = (event) => {
        this.setState({
            minutes: event.target.value
        })
    }

    setPause = () => {
        if (isPaused == true)
            isPaused = false;
        else
            isPaused = true;
    }

    stopDate = () => {
        this.setState({
            hours: 0,
            minutes: 0,
            date: 0
        })
    }

    updateDate = () => {
        if (isRunning == false) {
            isRunning = true;
            const interval = setInterval(() => {
                if (isPaused == false) {
                    if (this.state.date > 0) {
                        if (new Date().getSeconds() <= 0) {
                            this.setState({
                                date: this.state.date - (new Date().getSeconds() + 2) % (new Date().getSeconds() + 1)
                            })
                        }
                        else {
                            this.setState({
                                date: this.state.date - (new Date().getSeconds() + 1) % new Date().getSeconds() // czas - 1
                            });
                        }
                    }

                    else if (this.state.minutes > 0 && this.state.date <= 0) {
                        this.setState({
                            date: 59,
                            minutes: this.state.minutes - 1
                        })
                    }

                    else if (this.state.hours > 0 && this.state.minutes <= 0) {
                        this.setState({
                            minutes: 59,
                            date: 59,
                            hours: this.state.hours - 1
                        })
                    }
                    else {
                        isRunning = false;
                        return clearInterval(interval);
                    }
                    document.title = this.state.hours + ":" + this.state.minutes + ":" + this.state.date;
                }
            }, 1000);

        }
    };

    toggleTime = () => {
        this.setState({
            showTime: !this.state.showTime
        })
    }

    render() {
        return (
            <div className="mainApp">
                <label className="input-group-mb3">
                    <Timer name="hours"></Timer>
                    <input type="number" onChange={this.setHours}></input>

                    <Timer name="minutes"></Timer>
                    <input type="number" onChange={this.setMinutes}></input>

                    <Timer name="seconds"></Timer>
                    <input type="number" onChange={this.setSeconds}></input>

                    {this.state.showTime && <TimerDisplay hours={this.state.hours} minutes={this.state.minutes} date={this.state.date}></TimerDisplay>}
                </label>
                <br></br>
                <Button className="but1" variant="success" onClick={() => { this.updateDate() }}>Start</Button>
                <Button className="but1" variant="secondary" onClick={() => { this.setPause() }}>Pause/Resume</Button>
                <Button className="but1" variant="danger" onClick={() => { this.stopDate() }}>Stop/Refresh</Button>
                <Button className="but1" variant="dark" onClick={() => { this.toggleTime() }}>Toggle</Button>

                <Feedback></Feedback>
            </div>
        )
    }
}

export default TimerTotal;