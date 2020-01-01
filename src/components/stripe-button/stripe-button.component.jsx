import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_bEPE3xKXdGTcScBQHRYF7trk00RE61UuSS';

    const onToken = (token) => {
        console.log(token);
        alert("Payment successful");
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='KWEN Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;