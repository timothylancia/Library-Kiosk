import React from "react";
import { Switch, Route } from "react-router-dom";
import APUSupport from "./APUSupport";
import WEPASupport from "./WEPASupport";
import passwordReset from "./passwordReset";
import home from "./home";

// Navigation
const Main = () => (
  <Switch>
    <Route exact path="/" component={home} />
    <Route path="/APUSupport" component={APUSupport} />
    <Route path="/WEPASupport" component={WEPASupport} />
    <Route path="/passwordReset" component={passwordReset} />
  </Switch>
);

export default Main;
