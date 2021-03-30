import React from "react";

import "./styles/Navbar.css";
import logo from "../images/firefly_logo_100px.png";

class Navbar extends React.Component {
  render() {
    return (
        <div className="Navbar">
        <div className="container-fluid">
            <a className="Navbar__firefly" href="/">
                <img className="Navbar__firefly-logo" src={logo} alt="logo"/>
            </a>
        </div>
    </div>
    );
  }
}
export default Navbar;
