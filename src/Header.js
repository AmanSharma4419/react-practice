/**
 * Header.js: Header component
 * 
 * @props name: Heading to be displayed
 */

import React from "react";

function Header (props) {
    return (
        <h1>{props.name ? props.name : "No heading name received"}</h1>
    );
}

// class Header extends React.Component {
//     constructor(props){
//         super(props);
//     }

//     render () {
//         return (
//             <h1>{this.props.name}</h1>
//         );
//     }
// }

export default Header;