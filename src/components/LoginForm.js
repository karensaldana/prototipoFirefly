import React from "react";

import "./styles/LoginForm.css";
import { Link, withRouter } from "react-router-dom";
import AuthenticationService from "../services/AuthenticationService";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loading: false,
      error: null,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    AuthenticationService.iniciarSesion(
      this.state.username,
      this.state.password
    )
      .then((res) => {
        if (res.estado === "successful") {
          this.props.history.push("/dashboard");
        } else {
          this.setState({ loading: false, error: res.mensaje });
        }
      })
      .catch((err) => {
        this.setState({ error: err, loading: false });
      });
  };

  render() {
    return (
      <div className="shadow p-3 bg-body rounded">
        <form onSubmit={this.handleSubmit}>
          {this.state.error && (
            <div className="alert alert-danger" role="alert">
              {this.state.error}
            </div>
          )}
          <div className="input-group mb-3">
            <span className="input-group-text" id="icon-user">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </span>
            <input
              type="email"
              className="form-control"
              autoComplete="username"
              id="username"
              name="username"
              placeholder="Correo electrónico"
              aria-describedby="messageHelp"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="icon-password">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-lock-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
              </svg>
            </span>
            <input
              type="password"
              className="form-control"
              autoComplete="current-password"
              id="current-password"
              name="password"
              placeholder="Contraseña"
              aria-describedby="messageHelp"
              onChange={this.handleChange}
            />
          </div>

          <div className="mb3">
            <label className="form-text">
              {" "}
              <Link className="LoginForm__link" to="/">
                ¿Olvidaste tu contraseña?
              </Link>
            </label>
          </div>

          <div className="mb3">
            <div id="messageHelp" className="form-text"></div>
          </div>

          <div className="mb3 mt-3 pb-2 border-bottom">
            <button
              type="submit"
              className="btn btn-primary w-100"
              id="loginButton"
            >
              Iniciar sesión
            </button>
          </div>

          <div className="mb3">
            <label className="form-text">
              ¿No tienes una cuenta?
              <Link className="ml-1 LoginForm__link" to="/registro">
                Regístrate aquí
              </Link>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
