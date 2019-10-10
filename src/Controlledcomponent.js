import React from "react";
class Controlled extends React.Component {
    constructor() {
        super() 
        this.state = {
            data:""
        }
        
    }
    handleChange = (event) => {
        this.setState({data:event.target.value})
        console.log(event.target.value)
    }
    render() {
        return(
            <div>
                <h1>{this.state.data}</h1>
                <input type = "text" placeholder="Writedata" value = {this.state.data} onChange={this.handleChange}/>  
            </div>
            
        )
    }
}
export default Controlled;