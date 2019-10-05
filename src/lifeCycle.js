import React from "react";

class Lifecycle extends React.Component {
    constructor() {
        super();
        this.state = {
            marks : 10
        }
    }

    componentDidMount = () => {
        this.setState({ marks : this.state.marks + 2})
    }

    // componentWillUpdate = () => {
    //     this.setState({marks:this.state.marks = 0})
    // }

    // componentDidUpdate = () => {
    //     this.setState({marks:this.state.marks = 0})
    // }

    // componentWillUnmount = ()  => {
    //     this.setState({marks:this.state.marks = 0})
    // }

    render() {
        console.log("inside the Render")
        return (
            <div>
                <h1>{this.state.marks}</h1>
            </div>
        )
    }
}

export default Lifecycle;