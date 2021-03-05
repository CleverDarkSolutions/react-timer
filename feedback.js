import React from 'react'

let style1 = {
    width: '30em',
    height: '1em',
    padding: '1em',
    margin: 'auto',
    top: '5em'
}

let style2 = {
    height: '10em'
}


const Feedback = () => {
    return (
        <div>
            <h1 style={{top:'15em'}}>We would appreciate your feedback!</h1>
            <form>
                <div className="input-group mb-3" style={style1}>
                    <div className="input-group-prepend">
                        <span className="input-group-text">Name</span>
                    </div>
                    <input className="form-control"></input>
                </div>
                
                <div className="input-group mb-3" style={style1}>
                    <div className="input-group-prepend">
                        <span className="input-group-text">Email</span>
                    </div>
                    <input className="form-control"></input>
                </div>

               
                <div className="input-group mb-3" style={style1}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" style={style2}>Description</span>
                    </div>
                    <textarea className="form-control" style={style2}></textarea>
                </div>
        
                <div className="btn-group">
                    <button className="btn btn-secondary" style={{top:'15em'}}>Send</button>
                </div>
            </form>
        </div >
    )
}

export default Feedback;