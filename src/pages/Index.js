import React from "react";
import { Link } from "react-router-dom";

import "./styles/Index.css"
import SecuryImageHome from "../images/dispositivos-icons.png";

class Index extends React.Component {
  render() {
    return (
      <div className="Index__bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 col-lg-6 order-md-2">
              <img
                src={SecuryImageHome}
                alt="ImageHome"
                className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="100"
              />
            </div>
            <div className="col-12 col-md-7 col-lg-6 order-md-1 aos-init aos-animate">
              <h1 className="display-3 text-center text-md-left">
                Bienvenido a<span className="ml-2 Home__span">FIREFLY</span>
              </h1>
              <p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">La seguridad de tus sitios en nuestras manos.</p>
              <div className="text-center text-md-left">
                <Link to="./registro" className="btn btn-primary shadow lift mr-1">
                  Regístrate aquí
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
