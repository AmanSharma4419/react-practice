import React from "react";

import Header from "./Header";

class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            number: 0,
        };
    }

    componentDidMount = () => {
        console.log("Inside did mount");
        let isLoggedIn = localStorage.getItem("login");
        if(isLoggedIn !== "true") this.props.history.push("/");
    }
    
    componentDidUpdate = () => {
        console.log("Inside did update");
        // if(this.state.number === 0) this.setState({number: this.state.number + 1});
    }

    componentWillUnmount = () => {
        console.log("Inside will unmount");
    } 

    componentWillUpdate = () => {
        console.log("Inside will update");
    }



    IncrementItem = () => {
        this.setState({ number: this.state.number + 1 });
    }

    DecrementItem = () => {
        this.setState({ number: this.state.number - 1 });
    }

    ResetItem = () => {
        this.setState({ number: 0 });
    }


    render() {

        console.log("Inside render!");

        return (
            <div>
                <Header name="Counter" />
                <h1>{this.state.number}</h1>
                <button onClick={this.IncrementItem}>Click to Increment</button>
                <button onClick={this.DecrementItem}>Click to Decrement</button>
                <button onClick={this.ResetItem}>Click to Reset</button>
            </div>
        )
    }
}

export default Counter;