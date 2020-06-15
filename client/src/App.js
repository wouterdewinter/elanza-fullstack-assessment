import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./style/App.css";
import logo from "./logo.png";

function App() {
  return (
    <React.Fragment>
      <img src={logo} alt="logo" className="logo mx-auto d-block" />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
