import './App.css';
import React, { Component, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TimerTotal from './timerTotal';
import Navbar from './navbar';

let mainStyle = {
  backgroundImage: `url(https://coolbackgrounds.io/images/backgrounds/white/white-unsplash-9d0375d2.jpg)`,
  height: '100%',
  textAlign: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%'
}
class App extends Component {
  render() {
    return (
      <div style={mainStyle}>
        <Navbar></Navbar>
        <TimerTotal></TimerTotal>
      </div>
    )
  }
}

export default App;