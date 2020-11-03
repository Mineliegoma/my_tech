import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartCheckout } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/CheckoutItem.js'

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
   <div className='total'>
    <span>Total= ${total}</span>
   </div>
  </div>
 )
}
const mapStateToProps = createStructuredSelector({
 cartItems: selectCartItems,
 total: selectCartCheckout
});

export default connect(mapStateToProps)(Checkout);