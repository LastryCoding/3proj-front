import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Forms from "../components/formulaires/forms";
import Sinistres from "../components/formulaires/sinistres";
import Services from "../components/formulaires/services";
import Rappel from "../components/formulaires/rappel";
import Reparations from "../components/formulaires/reparations";
import Reclamations from "../components/formulaires/reclamations";

export default function Formulaires() {
  return (
    <Router>
      <Switch>
        <Route exact path="/formulaires">
          <Forms />
        </Route>
        <Route exact path="/formulaires/sinistres">
          <Sinistres />
        </Route>
        <Route exact path="/formulaires/services">
          <Services />
        </Route>
        <Route exact path="/formulaires/rappel">
          <Rappel />
        </Route>
        <Route exact path="/formulaires/reparations">
          <Reparations />
        </Route>
        <Route exact path="/formulaires/reclamations">
          <Reclamations />
        </Route>
      </Switch>
    </Router>
  );
}
