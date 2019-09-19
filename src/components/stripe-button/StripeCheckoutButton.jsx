import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_GexQEGdajs3MIgUXpJbhRYz9008fYb9QRY";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      currency="EUR"
      name="CRWN Clothing ltg"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`your total is €${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
