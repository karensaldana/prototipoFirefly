import React from "react";

import "./styles/Navbar.css";
import logo from "../images/icon_firefly_60px.png";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="./inicio">
            <img className="navbar-brand-img" src={logo} alt="LogoFirefly" />
            <h5 className="fs-1 ml-2 font-weight-bold">FIREFLY</h5>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fe fe-x"></i>
            </button>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown show">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarLandings"
                  data-toggle="dropdown"
                  to="/"
                  aria-haspopup="true"
                  aria-expanded="false"
                >Menú 1</Link>
              </li>
              <li className="nav-item dropdown">
              <Link
                  className="nav-link dropdown-toggle"
                  id="navbarPages"
                  data-toggle="dropdown"
                  to="/"
                  aria-haspopup="true"
                  aria-expanded="false"
                >Menú 2</Link>
              </li>
              <li className="nav-item dropdown">
              <Link
                  className="nav-link dropdown-toggle"
                  id="navbarAccount"
                  data-toggle="dropdown"
                  to="/"
                  aria-haspopup="true"
                  aria-expanded="false"
                >Menú 3</Link>
              </li>
              <li className="nav-item dropdown">
              <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDocumentation"
                  data-toggle="dropdown"
                  to="/"
                  aria-haspopup="true"
                  aria-expanded="false"
                >Menú 4</Link>
              </li>
            </ul>
            <Link className="navbar-btn btn btn-sm btn-primary lift ml-auto" to="/login">
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
