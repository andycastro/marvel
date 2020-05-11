import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/main/main";
import Details from "./pages/details/details";
import Update from "./pages/update/update";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>
        <Route path="/update">
          <Update />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
