import React from "react";

import "./styles/Loader.css"

class Loader extends React.Component {
  render() {
    return (
      <div className="loader-container">
        <div className="item-1"></div>
        <div className="item-2"></div>
        <div className="item-3"></div>
        <div className="item-4"></div>
        <div className="item-5"></div>
      </div>
    );
  }
}

export default Loader;
