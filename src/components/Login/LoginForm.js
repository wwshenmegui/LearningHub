import React,{ useState } from 'react'
import { withRouter } from "react-router";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import '../../assets/css/Login.css'
import ShowError from '../ShowError/ShowError.js'
import UserService from '../../services/UserService.js'


function LoginForm(props){

  const [email,setEmail]=useState(""),
    [password,setPassword]=useState("");

   async function handleSubmit(event){
    event.preventDefault();

    try {
      const user = {email: email, password: password};
      await UserService.login(user);
      props.history.push("/");
    } catch (error) {
      ShowError(error);
    }

  }

  return(

      <div>
        <form id="loginForm" onSubmit={handleSubmit} method="POST">
          <div className="form-group">
            <label className="col-sm-4 control-label">Email</label>
            <div className="col-sm-8">
              <input type="input" className="form-control" placeholder="Email or Username" value={email} onChange={function(event){
                setEmail(event.target.value);
              }} required/>
            </div>
          </div>

          <div className="form-group">
            <label className="col-sm-4 control-label">Password</label>
            <div className="col-sm-8">
              <input type="password" className="form-control" placeholder="Password" value={password} onChange={function (event) {
                setPassword(event.target.value);
              }} required/>
            </div>
          </div>

          <br />
          <input type="submit" id="loginBtn" className="btn btn-success" value="Login" />
        </form>
      </div>

  )
}

export default withRouter(LoginForm)