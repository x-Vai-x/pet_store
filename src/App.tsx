import React from "react";
import { Route, Switch } from "react-router-dom";
import PetShopPage from "./components/pages/PetShopPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={PetShopPage} />
      </Switch>
    </Provider>
  );
}

export default App;
