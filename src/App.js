import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage-component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/ShopPage-component";
import Header from "./components/Header";
import SignInAndOut from "./pages/SignInAndOut-page";
import { auth } from "./firebase/firebase-utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth() {
    return null;
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillMount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndOut} />
        </Switch>
      </>
    );
  }
}

export default App;
