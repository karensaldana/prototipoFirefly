import React from "react";

import "./styles/Preregistration.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import icon from "../images/team-icon.png";

class Preregistration extends React.Component {
  //state = {};
  //handleChange = (e) => {
  //  this.setState({
  //    [e.target.name]: e.target.value,
  //  });
  //};

  handleOnClick = (e) => {
    console.log("El boton fue click");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("El boton entro a prevent");
  };

  render() {
    return (
      <div className="Preregistration">
        <div className="u-wrapper">
          <div className="HeadTitle">
            <div className="HeadTitle-icon">
              <img src={icon} alt="Icon" />
            </div>
            <div className="HeadTitle-content">
              <h4>Estas a unos pasos de ser parte del equipo Firefly</h4>
              <p>Completa tus datos para crear tu cuenta.</p>
            </div>
          </div>
        </div>
        <div className="HeadTitle">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group id="preregistrationName">
              <Form.Label className="font-weight-bold">
                Nombre completo
              </Form.Label>
              <Form.Row>
                <Col>
                  <Form.Control
                    onChange={this.props.onChange}
                    placeholder="Nombre(s)"
                    type="text"
                    name="firstName"
                    value={this.props.formValues.firstName}
                  />
                </Col>
                <Col>
                  <Form.Control
                    onChange={this.props.onChange}
                    placeholder="Apellidos"
                    type="text"
                    name="lastName"
                    value={this.props.formValues.lastName}
                  />
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group id="preregistrationEmail">
              <Form.Label className="font-weight-bold">
                Correo electrónico
              </Form.Label>
              <Form.Text className="text-muted">
                Te enviaremos un enlace de confirmación para activar tu cuenta.
              </Form.Text>
              <Form.Control
                onChange={this.props.onChange}
                type="email"
                placeholder="nombre@empresa.com"
                name="email"
                value={this.props.formValues.email}
              />
            </Form.Group>
            <Form.Group id="preregistrationAcceptTerms">
              <Form.Check
                type="checkbox"
                label="Acepto la Política de privacidad y los Términos de servicio de Firefly."
              />
            </Form.Group>

            <Form.Group id="preregistrationContinue">
              <Form.Row>
                <Col>
                  <Form.Text className="text-muted">
                    <span>¿Ya tienes una cuenta Firefly?</span>
                    <a href="/"> Entra aquí</a>
                  </Form.Text>
                </Col>
                <Col>
                  <Button
                    onClick={this.handleOnClick}
                    className="float-right"
                    variant="primary"
                    type="submit"
                  >
                    CONTINUAR
                  </Button>
                </Col>
              </Form.Row>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}

export default Preregistration;
