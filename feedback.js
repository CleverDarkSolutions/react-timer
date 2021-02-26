import React from 'react'

let style1 = {
    width: '30em',
    height: '1em',
    padding: '1em',
    margin: 'auto'
}

let style2 = {
    height: '10em'
}


const Feedback = () => {
    return (
        <div>
            <h1>We would appreciate your feedback!</h1> <br></br>
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
            </form>
        </div >
    )
}

export default Feedback;