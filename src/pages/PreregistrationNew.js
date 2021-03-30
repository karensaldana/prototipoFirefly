import React from "react";

import Navbar from "../components/Navbar";
import Preregistration from "../components/Preregistration";

class PreregistrationNew extends React.Component {
  state = {
    formPreregistration: {
      firstName: "",
      lastName: "",
      email: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      formPreregistration: {
        ...this.state.formPreregistration,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <Navbar />

        <div className="container">
          <Preregistration
            onChange={this.handleChange}
            formValues={this.state.formPreregistration}
          />
        </div>
      </div>
    );
  }
}

export default PreregistrationNew;
