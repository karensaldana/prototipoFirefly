import React from "react";

import SendEmail from "../images/email_send_registry_150px.png";
import { Link } from "react-router-dom";

class ConfirmationByEmail extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row align-items-center justify-content-md-center">
          <div className="col my-4">
            <img
              className="mx-auto d-block mb-4"
              src={SendEmail}
              alt="SendEmail"
              width="150"
            />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col text-center">
            <h1>Hemos enviado un correo de confirmación a tu cuenta.</h1>
            <p>
              Si aún no te llega el correo,
              <Link to="/" className="ml-1">
                reenviar aquí.
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmationByEmail;
