import React,{ useState } from 'react'
import { withRouter } from "react-router";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import '../../assets/css/Register.css'
import ShowError from '../ShowError/ShowError.js'
import UserService from '../../services/UserService.js'

function RegisterForm(props){

    const [email, setEmail] = useState(""),
      [username, setUsername] = useState(""),
      [password, setPassword] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const user = {email: email, username: username, password: password};
            await UserService.register(user);
            props.history.push("/");
        } catch (error) {
            ShowError(error);
        }
    }

    return(
            <div>
                <form id="RegisterForm" onSubmit={handleSubmit} method="POST">
                    <div className="form-group">
                        <label className="col-sm-4 control-label">Email</label>
                        <div className="col-sm-8">
                            <input type="input" className="form-control" placeholder="Email" value={email} onChange={function (event) {
                                setEmail(event.target.value);
                            }}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-4 control-label">Username</label>
                        <div className="col-sm-8">
                            <input type="input" className="form-control" placeholder="Username" value={username} onChange={function (event) {
                                setUsername(event.target.value);
                            }}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-4 control-label">Password</label>
                        <div className="col-sm-8">
                            <input type="password" className="form-control" placeholder="Password" value={password} onChange={function (event) {
                                setPassword(event.target.value);
                            }}/>
                        </div>
                    </div>
                    <br />
                    <br />
                    <input type="submit" id="RegisterBtn" className="btn btn-success" value="Sign in" />
                </form>
            </div>
        )
}

export default withRouter(RegisterForm);