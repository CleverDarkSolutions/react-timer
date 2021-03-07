import React from 'react'

let styleNav = {
    height: '5vw',
    color: 'white',
    fontSize: '3vw'
}

let navElement1 = {
    position: 'absolute',
    top: '0vh',
    left: '5vw'
}

let navElement2 = {
    position: 'absolute',
    top: '0vh',
    left: '20vw'
}

let navElement3 = {
    position: 'absolute',
    top: '0vh',
    left: '40vw'
}

let navElement4 = {
    position: 'absolute',
    top: '0vh',
    left: '60vw'
}
const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark" style={styleNav}>
                <ul className="navbar-nav mr-auto list-inline" >
                    <li className="nav-item list-inline-item" style={navElement1} >
                        <a className="nav-link" onClick={props.functionOne}>Timer</a>
                    </li>
                    <li className="nav-item list-inline-item" style={navElement2} >
                        <a className="nav-link" onClick={props.functionTwo}>Stopwatch</a>
                    </li>
                    <li className="nav-item list-inline-item" style={navElement3} >
                        <a className="nav-link" onClick={props.functionThree}>Calculator</a>
                    </li>

                    <li className="nav-item list-inline-item" style={navElement4} >
                        <a className="nav-link" onClick={props.functionFour}>Feedback</a>
                    </li>
                </ul>

            </nav>


        </div>
    )
}

export default Navbar