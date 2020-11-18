import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartCheckout } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/CheckoutItem.js'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.js'

import './checkout.styles.scss';
const Checkout = ({ cartItems, total }) => {
 return (
  <div className='checkout-page'>
   <div className='checkout-header'>
    <div className='header-block'>

     <span>Products</span>
    </div>
    <div className='header-block'>
     <span>Description</span>
    </div>
    <div className='header-block'>
     <span>quantity</span>
    </div>
    <div className='header-block'>
     <span>Price</span>
    </div>
    <div className='header-block'>
     <span>Remove</span>
    </div>
   </div>
   {
    cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem} />))
   }
   <div className='total'>Total: ${total} </div>
   <div className="testing-card">
    *For testing purposes, please use the following test credit card for payments
     <br />
     4242 4242 4242 4242 - Exp: 05/23-CVV: 554
    </div>
   <StripeCheckoutButton price={total} />
  </div>
 )
}
const mapStateToProps = createStructuredSelector({
 cartItems: selectCartItems,
 total: selectCartCheckout
});

export default connect(mapStateToProps)(Checkout);