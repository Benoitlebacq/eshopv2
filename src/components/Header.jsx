import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./header-style.scss";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../redux/cart/cart-selector";
import { selectCurrentUser } from "../redux/user/user-selectors";
import { ReactComponent as Logo } from "../crown.svg";
import { auth } from "../firebase/firebase-utils";
import CartIcon from "./cart-icon/CartIcon";
import CartDropdown from "./cart-icon/CartDropdown";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/shop" className="option">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign in
          </Link>
        )}
        <CartIcon />
      </div>{" "}
      {hidden ? null : <CartDropdown />}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

// const mapStateToProps = state => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state)
// });

export default connect(mapStateToProps)(Header);
