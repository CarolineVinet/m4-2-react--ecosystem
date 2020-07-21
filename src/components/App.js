import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header.js";

const App = (props) => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          Homepage
        </Route>
        <Route exact path="/about">
          About
        </Route>
        <Route exact path="/items/:itemId">
          Item Page
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
