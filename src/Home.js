import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {

        return (
            <div>
                <Link to="/todo"><button>Todo</button></Link>
                <Link to="/register"><button>Counter</button></Link>
            </div>
        );
    }
}

export default Home;