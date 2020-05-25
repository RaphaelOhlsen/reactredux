import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

class Roteamento extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/login" component={LoginPage} ></Route>
      </Switch>
    );
  }
}

export default Roteamento;