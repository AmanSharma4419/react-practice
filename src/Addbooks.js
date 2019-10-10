import React from "react";
import { METHODS } from "http";
class Book extends React.Component {
    constructor() {
        super() 
        this.state = {
            title : ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.onclick = this.onclick.bind(this)


      
    }

     handleChange = (e) => {
        // const name = e.target.name
        // const value = e.target.value

        const {name, value} = e.target

        this.setState({
            [name]:value
        })
    }

    onclick = () => {

        // fetch("api/Books/read").then(res => res.json()).then(data=> console.log(data))
        // .catch(err => console.log(err))

        // fetch('api.github.com/users/amitg01').then(res => res.json()).then(data=>console.log(data))
        
        fetch("api/Books/create",{
            method:"POST",
            headers:{
                'content-type':'application/json',
                "Clear-Site-Data": "*"
            },
            body:JSON.stringify({title:this.state.title})
        }).then(res=>res.json())
        .then(data=>console.log(data)).catch(err =>console.log(err))

      

        
    }
    render() {
        return(
            <div>
               <input type= "text"
                name="title"
                placeholder = "Add books" 
                value={this.state.title} 
                onChange={this.handleChange}/>
               <button onClick={this.onclick}>AddBooks</button>
            </div>
        )
    }
}

export default Book;