import React from 'react'
import { withRouter } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

class ProfileHeader extends React.Component{
    constructor(props) {
        super(props);
        this.logout=this.logout.bind(this);
    }

    logout(){
        localStorage.clear();
        this.props.history.push("/")
    }

    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark">

                    <Nav className="mr-auto">
                        <div className="col-md-2">
                            <button className="btn btn-danger" onClick={this.logout}>Log out</button>
                        </div>
                    </Nav>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default withRouter(ProfileHeader);