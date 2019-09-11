import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './../static/css/global.css'
import {Link} from 'react-router-dom'
class RegisterHeader extends React.Component{
    render() {
        return(
            <div>
                <Link to="/" >
                    <button className="btn btn-default cBtn1">Home</button>
                </Link>
                <h1 className="logo">Learning Hub</h1>
                <Link to="/login/" >
                    <button className="btn btn-default cBtn2">Sign in</button>
                </Link>
            </div>
        )
    }
}

export default RegisterHeader