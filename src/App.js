import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage-component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/ShopPage-component";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;
