import React from "react";
import { Route, Switch } from "react-router-dom";
import PetShopPage from "./components/pages/PetShopPage";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={PetShopPage} />
    </Switch>
  );
}

export default App;
