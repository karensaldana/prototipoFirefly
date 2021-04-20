import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ConfirmationByEmail from "../pages/ConfirmationByEmail";
import Preregistration from "../pages/Preregistration";
import Login from "../pages/Login";
import Index from "../pages/Index";
import Layout from "./Layout";
import Dashboard from "../pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/registro" component={Preregistration} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/inicio" component={Index} />
          <Route exact path="/dashboard" component={Dashboard}
          <Route
            exact
            path="/confirmacionemail"
            component={ConfirmationByEmail}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
