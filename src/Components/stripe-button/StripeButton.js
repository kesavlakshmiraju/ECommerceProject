import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

export default function StripeButton({price}) {
    const publishableKey = 'pk_test_51Lc5msSAlk3UnLHdBXQG7ZKj1MP4n4iHIycnHQQuAcyMwMC6uafv2ggaByd0KCEa4uzTeoFRbRT4fe8eloLNUd3Y009YDv66mW'
    const priceForStripe =  price * 100 ;
    const onToken = (token) => {
        console.log(token)
        alert('Payment Successful')
    }
  return (
    <div>
    <StripeCheckout
    label='Pay Now'
    name='CROWN Clothing Ltd.'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg' 
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    />
    </div>

  )
}
