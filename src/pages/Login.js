import React from "react";

import SecurityImage from "../images/Security-home.svg";
import LoginForm from "../components/LoginForm";

class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="pt-4 pt-md-11">
          <div className="container">
            <div className="row align-items-center">
            <div className="col-12 col-md-5 col-lg-6 order-md-1">
                <img
                  src={SecurityImage}
                  className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate"
                  alt="logo"
                  width="500"
                  data-aos="fade-up"
                  data-aos-delay="100"
                />
              </div>
              <div className="col-12 col-md-7 col-lg-6 order-md-2 aos-init aos-animate">
                <LoginForm />
              </div>
              
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Login;
