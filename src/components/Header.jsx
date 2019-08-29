import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import "./header-style.scss";
import { ReactComponent as Logo } from "../crown.svg";
import { auth } from "../firebase/firebase-utils";
import CartIcon from "./cart-icon/CartIcon";
import CartDropdown from "./cart-icon/CartDropdown";

const Header = ({ currentUser , hidden}) => {
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
        <CartIcon  />
      </div> { hidden ? null : < CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({user : {currentUser}, cart : {hidden}}) => ({
  currentUser ,
  hidden
})


export default connect(mapStateToProps)(Header);
