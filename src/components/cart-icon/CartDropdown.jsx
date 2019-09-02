import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart-selector";
import { withRouter } from "react-router-dom";
import "./cart-dropdown.styles.scss";
import CustomButton from "../CustomButton-component";
import { createStructuredSelector } from "reselect";
import CartItem from "../CartItem";
import { toggleCartHidden } from "../../redux/cart/cart-action";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your card is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Go to Checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
