import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Todo from "./Todo";
import Counter from "./counter";
import Login from "./login";
import Home from "./Home";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }

  componentDidMount = () => {
    let isLoggedIn = localStorage.getItem("login");
    if(isLoggedIn === "true") this.setState({isLoggedIn: true});
    // else this.setState({isLoggedIn: false});
  } 

  handleLogin = () => {
    this.setState({isLoggedIn: true});
  }

  render() {

    return (
      <div>

        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={() => this.state.isLoggedIn ? <Home /> : <Login loginUser={this.handleLogin} />} />
            {/* <Route path="/" exact component={this.state.isLoggedIn ? Home : Login} /> */}
            <Route path="/counter" component={Counter} />
            <Route path="/todo" component={Todo} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;