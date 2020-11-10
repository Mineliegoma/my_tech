import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
const StripeCheckoutButton = ({ price }) => {
 const priceForStripe = price * 100
 const publishableKey = 'pk_test_51HlQKdILBoVKADeWECz7VbjNzHXMtXeJ6Vd4rqqhmeHCkGle5eZ3ogSFVdrBJoOiR3kVqeJTa6htxh80F3ATFu5700X5Ur5HQS'
 const onToken = token => {
  console.log(token);
  alert('Your Payment was successfull')
 }
 return (
  <StripeCheckout
   label='Pay Now'
   name='Gadgets Tech'
   billingAddress
   shippingAddress
   image=''
   description={`Your total is $${price}`}
   amount={priceForStripe}
   panelLabel='Pay Now'
   token={onToken}
   stripeKey={publishableKey}
  />
 );
}
export default StripeCheckoutButton