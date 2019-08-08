import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage-component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/ShopPage-component";
import Header from "./components/Header";
import SignInAndOut from "./pages/SignInAndOut-page";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = () => {
    return null;
  };

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
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
