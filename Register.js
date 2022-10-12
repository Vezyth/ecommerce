

import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";




class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: [],
            password: [],
            repass: [],
            errorMessage: "",
            email: [],
            errmessage:""
        };
    }



    onlogin = () => {

        if (this.state.repass === "" || this.state.password === "" || this.state.username === "", this.state.email === "") {
            alert("Please Fill All The Field")
        } else if (this.state.repass !== this.state.password) {
            alert("Password Doesn't Matched")
        } else {
            this.props.changePage("login");
        }

        if ( this.state.password === "" || this.state.username === "") {
            alert("Please Fill All The Field")
        } else {
            this.props.changePage("login");
        }
    }

    componentDidUpdate() {
        console.log("This component is updated");
        errmessage: {this}
        
      }
    onRegister= () => {
            const name = [...this.state.username]
            const password = [...this.state.password]
            name.push(this.state.username)
            password.push(this.state.password)
            
    }

    render() {
        return (
            <form>
                <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                            aria-controls="pills-login" aria-selected="true">Login</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
                            aria-controls="pills-register" aria-selected="false">Register</a>
                    </li>
                </ul>
                <div class="tab-content">

                </div>

                <div class="form-outline mb-4">
                    <input type="email" id="loginName" class="form-control" 
                    value={this.state.username}
                    onChange={event => this.setState({
                        username: event.target.value
                    })} 
                    />
                    <label class="form-label" for="loginName">username</label>
                </div>


                <div class="form-outline mb-4">
                    <input type="password" id="loginPassword" class="form-control"
                        value={this.state.password}
                        onChange={event => this.setState({
                            password: event.target.value
                        })} 
                    />
                    <label class="form-label" for="loginPassword"
                    >Password</label>
                </div>

                
               

                <button type="submit" class="btn btn-primary btn-block mb-4"
                onClick={this.onRegister}
                >Sign in</button>

                <div class="form-outline mb-4">
                    <input type="text" id="registerName" class="form-control" />
                    <label class="form-label" for="registerName">Name</label>
                </div>

             
                <div class="form-outline mb-4">
                    <input type="text" id="registerUsername" class="form-control" 
                    value={this.state.username}
                    onChange={event => this.setState({
                        username: event.target.value
                    })} 
                    />
                    <label class="form-label" for="registerUsername">Username</label>
                </div>

           
                <div class="form-outline mb-4">
                    <input type="email" id="registerEmail" class="form-control" 
                    value={this.state.email}
                    onChange={event => this.setState({
                        email: event.target.value
                    })} 
                    />
                    <label class="form-label" for="registerEmail">Email</label>
                </div>

              
                <div class="form-outline mb-4">
                    <input type="password" id="registerPassword" class="form-control"
                    value={this.state.password}
                    onChange={event => this.setState({
                        password: event.target.value
                    })} 
                    />
                    <label class="form-label" for="registerPassword">Password</label>
                </div>

                <div class="form-outline mb-4">
                    <input type="password" id="registerRepeatPassword" class="form-control"
                    value={this.state.repass}
                    onChange={event => this.setState({
                        repass: event.target.value
                    })} 
                    />
                    <label class="form-label" for="registerRepeatPassword">Repeat password</label>
                </div>

                
                

                <button type="submit" class="btn btn-primary btn-block mb-3"
                onClick={this.onRegister}
                >Sign in</button>
                <label>{this.state.errmessage}</label>
            </form>
  





        );
                }
}

export default Register;