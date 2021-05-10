import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoutes";
import { Login } from "../authentication";
import { Dashboard } from "../Dashboard";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route render={() => <div>Error 404</div>} />
        </Switch>
      </Router>
    </>
  );
};

export { App };
