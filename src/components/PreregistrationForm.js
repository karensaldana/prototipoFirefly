import React from "react";

import "./styles/PreregistrationForm.css";
import { Link } from "react-router-dom";

class PreregistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accepTerms: false,
      btnStyle: "btn btn-primary disabled",
    };
  }

  handleCheck = (e) => {
    this.setState({accepTerms: !e.target.checked, btnStyle: "btn btn-primary"});
  };

  render() {
    return (
      <React.Fragment>
        <form className="row g-3" onSubmit={this.props.onSubmit}>
          <div className="col-12">
            <label className="form-label font-weight-bold">
              *Nombre completo
            </label>
          </div>

          <div className="input-group">
            <div className="col-md-6 mb-3">
              <input
                className="form-control"
                type="text"
                id="nameInput"
                placeholder="Nombre(s)"
                name="firstName"
                onChange={this.props.onChange}
                value={this.props.formValues.firstName}
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                className="form-control"
                type="text"
                id="lastNameInput"
                placeholder="Apellidos"
                name="lastName"
                onChange={this.props.onChange}
                value={this.props.formValues.lastName}
              />
            </div>
          </div>
          <div className="col-12 ">
            <label className="form-label font-weight-bold m-0">
              *Correo electrónico
            </label>
            <div className="form-text mb-1" id="emailHelp">
              <span className="text-secondary">
                Te enviaremos un enlace de confirmación para activar tu cuenta.
              </span>
            </div>
          </div>
          <div className="col-12 mb-3">
            <input
              className="form-control"
              type="email"
              id="emailInput"
              placeholder="nombre@empresa.com"
              aria-describedby="emailHelp"
              name="email"
              onChange={this.props.onChange}
              value={this.props.formValues.email}
            />
          </div>
          <div className="col-12">
            <label className="form-label font-weight-bold">
              Número de celular
            </label>
          </div>
          <div className="col-12 mb-3">
            <div className="input-group">
              <span className="input-group-text" id="lada">
                +52
              </span>
              <input
                className="form-control"
                type="number"
                id="cellphoneInput"
                placeholder="999-999-9999"
                name="cellphone"
                onChange={this.props.onChange}
                value={this.props.formValues.cellphone}
              />
            </div>
          </div>
          <div className="col-12 mb-3 pb-2 border-bottom">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="accepCheck"
                name="accepTerms"
                onChange={this.handleCheck}
              />
              <label className="form-check-label">
                Acepto la
                <Link className="ml-1 Preregistration__link" to="/">
                  política de privacidad
                </Link>{" "}
                y los
                <Link className="ml-1 Preregistration__link" to="/">
                  términos de servicio
                </Link>{" "}
                de Firefly.
              </label>
            </div>
            {this.props.error && (
              <div className="alert alert-danger" role="alert">
                {this.props.error.message}
              </div>
            )}
          </div>
          <div className="col-md-8 col-sm-12 mb-2">
            <span>
              ¿Ya tienes una cuenta Firefly?
              <Link className="ml-1 Preregistration__link" to="/login">
                Entra aquí
              </Link>
            </span>
          </div>
          <div className="col-md-4 col-sm-12 d-md-flex justify-content-md-end mb-2">
            <button
              className={this.state.btnStyle}
              disabled={this.state.accepTerms}
              aria-disabled="true"
              type="submit"
              name="accepRegistry"
            >
              Continuar
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default PreregistrationForm;
