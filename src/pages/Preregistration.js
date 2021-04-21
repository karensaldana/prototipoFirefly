import React from "react";

import TeamRegistry from "../images/team_registry_56px.png";
import PreregistrationForm from "../components/PreregistrationForm";
import AuthenticationService from "../services/AuthenticationService";
import Loader from "../components/Loader";

class Preregistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formPreregistration: {
        firstName: "",
        lastName: "",
        email: "",
        cellphone: "",
      },
      estado: "",
      mensaje: "",
      loading: false,
      error: null,
    };
  }

  handleChange = (e) => {
    this.setState({
      formPreregistration: {
        ...this.state.formPreregistration,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    const userInfo = {
      nombre: this.state.formPreregistration.firstName,
      apellidos: this.state.formPreregistration.lastName,
      fechaNacimiento: "",
      email: this.state.formPreregistration.email,
      perfil: 1,
      numeroCelular: this.state.formPreregistration.cellphone,
    };

    AuthenticationService.register(
      userInfo.nombre,
      userInfo.apellidos,
      userInfo.fechaNacimiento,
      userInfo.email,
      userInfo.perfil,
      userInfo.numeroCelular
    ).then(
      (response) => {
        this.setState({
          mensaje: response.mensaje,
          estado: response.estado,
          loading: false,
          error: null,
        });
        this.props.history.push("/confirmacionemail");
      })
      .catch((err) => {
        this.setState({ error: err, loading: false });
      });
  };

  render() {
    if (this.state.loading) {
      return <Loader />;
    }

    return (
      <React.Fragment>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center py-3 m-auto border-bottom">
            <div className="mr-3 justify-content-center">
              <img src={TeamRegistry} alt="IconRegistryTeam" />
            </div>
            <div>
              <h3 className="m-0">
                Estás a unos pasos de pertenecer al equipo Firefly
              </h3>
              <p className="m-0">Completa tus datos para crear tu cuenta.</p>
            </div>
          </div>
          <div className="mt-3 row justify-content-center">
            <div className="col-8">
              <PreregistrationForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.formPreregistration}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Preregistration;
