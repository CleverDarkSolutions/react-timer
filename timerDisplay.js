import React from 'react';

const TimerDisplay = (props) => {
    let hours = props.hours ? props.hours : 0;
    let minutes = props.minutes ? props.minutes : 0;
    let date = props.date ? props.date : 0;
    if(hours<10)
        hours = "0" + hours;
    if(minutes<10)
        minutes = "0" + minutes;
    if(date<10)
        date = "0" + date;
    return(
        <div className="timerDisplay">{hours}:{minutes}:{date}</div>
    )
}

export default TimerDisplay;