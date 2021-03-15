import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TimerTotal from './timerTotal';
import Navbar from './navbar';
import Feedback from './feedback';
import Stopwatch from './stopwatch';
import Calculator from './calculator';

let mainStyle = {
  backgroundImage: `url(https://www.fg-a.com/wallpapers/2018-quatrefoil-background-white.jpg)`,
  height: '100%',
  textAlign: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%'
}
class App extends Component {
  state = {
    toggleFeedback : false,
    toggleTimer : true,
    toggleStopwatch : false,
    toggleCalculator: false
  }

  openTimer = () => {
    this.setState({
      toggleFeedback : false,
      toggleTimer : true,
      toggleStopwatch : false,
      toggleCalculator: false
    });
  }

  openFeedback = () => {
    this.setState({
      toggleFeedback : true,
      toggleTimer : false,
      toggleStopwatch : false,
      toggleCalculator: false
    })
  }

  openStopwatch = () => {
    this.setState({
      toggleFeedback: false,
      toggleTimer: false,
      toggleStopwatch: true,
      toggleCalculator: false
    })
  }

  openCalculator = () => {
    this.setState({
      toggleFeedback: false,
      toggleTimer: false,
      toggleStopwatch: false,
      toggleCalculator: true
    })
  }
  render() {
    return (
      <div style={mainStyle}>
        <Navbar functionOne={() => { this.openTimer() }} 
          functionTwo={() => { this.openStopwatch() }} functionThree={() => { this.openCalculator() }} functionFour={() => { this.openFeedback() }}></Navbar>
        {this.state.toggleTimer && <TimerTotal></TimerTotal>}
        {this.state.toggleFeedback && <Feedback></Feedback>}
        {this.state.toggleStopwatch && <Stopwatch></Stopwatch>}
        {this.state.toggleCalculator && <Calculator></Calculator>}
      </div>
    )
  }
}

export default App;