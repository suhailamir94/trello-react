import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import TrelloBoard from "../components/TrelloBoard";
import BoardDashboard from "../components/BoardDashboard";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project/:projectID" exact component={BoardDashboard} />
          <Route
            path="/project/:projectID/board/:boardID"
            exact
            component={TrelloBoard}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
