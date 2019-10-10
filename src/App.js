import React from "react";
import { BrowserRouter, Route,Switch } from "react-router-dom";

// import Todo from "./Todo";
// import Counter from "./counter";
// import Login from "./login";
// import Home from "./Home";
// import Register from "./register";
// import Fetch from "./fetch";
// import Book from "./Addbooks"
  import Component from "./Controlledcomponent"
import "./App.css";
import Controlled from "./Controlledcomponent";
// import ShowBook from "./Showbooks"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }

  // componentDidMount = () => {
  //   let isLoggedIn = localStorage.getItem("login");
    // if(isLoggedIn === "true") this.setState({isLoggedIn: true});
    // else this.setState({isLoggedIn: false});
  // } 

  // handleLogin = () => {
  //   this.setState({isLoggedIn: true});
  // }

  render() {

    return (
      <div>
        <Controlled />
        {/* <BrowserRouter> */}
           {/* <Switch> */}
              {/* <Route path="/" exact component={() => this.state.isLoggedIn ? <Home /> : <Login loginUser={this.handleLogin} />} /> */}
              {/* <Route path="/" exact component={this.state.isLoggedIn ? Home : Login} /> */}
              {/* <Route path="/register" exact component={Register} />
              <Route path="/todo" component={Todo} />
              <Route path="/counter" counter={Counter} />
              <Route component = {Home} /> */}
            {/* </Switch> */}
        {/* </BrowserRouter> */}
      </div>
    );
  }
}

export default App;