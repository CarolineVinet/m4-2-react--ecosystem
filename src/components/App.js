import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";
import About from "./About.js";
import { GlobalStyles } from "./GlobalStyles.js";
import ItemDetails from "./ItemDetails.js";

const App = ({ sellers, items }) => {
  return (
    <Router>
      <GlobalStyles />
      <Header></Header>
      <Switch>
        <Route exact path="/">
          Homepage
          <Home sellers={sellers} items={items}></Home>
        </Route>
        <Route exact path="/about">
          About
          <About></About>
        </Route>
        <Route exact path="/items/:itemId">
          Item Page
          <ItemDetails></ItemDetails>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
