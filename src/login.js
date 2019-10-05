/**
 * Login.js
 * 
 * login ID: admin, 
 * password: admin
 */
import React from "react"
// import axios from "axios";

import Header from "./Header";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            error_message: "",
        };
    }

    handleInputChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    // handleUsernameChange = (event) => {
    //     let value = event.target.value;
    //     this.setState({username: value});
    // }

    // handlePasswordChange = (event) => {
    //     let value = event.target.value;
    //     this.setState({password: value});
    // }

    handleLoginClick = () => {
        let username = this.state.username;
        let password = this.state.password;

        // axios.post("/login", {
        //     username: username,
        //     password: password
        // })
        // .then(res => res.json())
        // .then(data => {
        //     if(data.success) {
        //         this.props.loginUser();
        //     }
        //     else if (!data.success) {
        //         this.setState({error_message: "Incorrect username or password!"})
        //     }
        // })
        // .catch(e => {

        // });

        if(username === "admin" && password === "admin") {
            localStorage.setItem("login", "true")
            this.props.loginUser();
        }
        else {
            localStorage.clear()
            this.setState({error_message: "Incorrect username or password"});
        }
    }

    render() {

        return (
            <>
                <Header name="Login" />
                <div className="Parent">
                    <div className="Register">
                        <input onChange={this.handleInputChange} name="username" type="text" placeholder="Enter Name" />
                        <input onChange={this.handleInputChange} name="password" type="Password" placeholder="Enter Password" />
                        <input onClick={this.handleLoginClick} type="submit" />
                    </div>
                    <p>{this.state.error_message}</p>
                </div>
            </>
        );
    }
}

export default Login;