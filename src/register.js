import React from "react";

class Register extends React.Component {
constructor() {
    super()
    this.state = {
        key: "Register!"
    }
}
render() {
    return (
        <div className = "Parent">
            <form className = "Register">
                <h1>{this.state.key}</h1>
                <input type = "text" placeholder = "Enter Name"/>
                <input type = "text" placeholder = "Enter Email"/>
                <input type = "Password" placeholder = "Enter Password"/>
                <input type = "submit"/>
            </form>
        </div>
    )
}

}

export default Register;