import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Learning Hub</Navbar.Brand>
                    <Nav className="mr-auto">
                        
                        <div className='col-md-2 '>
                        <Link to="/create" >
                            <button className="btn btn-warning cBtn1">Create</button>
                        </Link>
                        </div>
                        <div className='col-md-3 '>
                        <Link to="/assignment" >
                            <button className="btn btn-warning cBtn1">Assignments</button>
                        </Link>
                        </div>

                        <div className='col-md-2 '>
                        <Link to="/login/" >
                            <button className="btn btn-warning cBtn2">Sign in</button>
                        </Link>
                        </div>
                        <div className='col-md-2'>
                        <Link to="/register/" >
                            <button className="btn btn-primary cBtn2">Sign Up</button>
                        </Link>
                        </div>
                    </Nav>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header