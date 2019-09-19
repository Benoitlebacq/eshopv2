import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage-component";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import { connect } from "react-redux";
import Header from "./components/Header";
import SignInAndOut from "./pages/SignInAndOut-page";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
import { setCurrentUser } from "./redux/user/user-actions";
import Checkout from "./pages/Checkout";

class App extends React.Component {
  unsubscribeFromAuth = () => {
    return null;
  };

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser({ userAuth });
      }
    });
  }

  componentWillMount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndOut />
            }
          />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </>
    );
  }
}
// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser
// });

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
