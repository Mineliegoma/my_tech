import React from 'react'
import { connect } from 'react-redux'
import CustomButtom from '../custom-buttom/CustomButtom.js'
import './cart.styles.scss'
import { withRouter } from 'react-router-dom'
import CartItem from '../cart-item/CartItem.js'
import { selectCartItems } from '../../redux/cart/cart.selectors'
// import { toogleCardHidden } from '../../redux/cart/cart.action.js'
import { toggleCartHidden } from '../../redux/cart/cart.actions.js'

const Cart = ({ cartItems, history, dispatch }) => {
 return (
  <div className='cart-dropdown'>
   <div className="cart-items">

    {cartItems.length ? (
     cartItems.map(cartItem => (<CartItem key={cartItem.id} detail={cartItem} />))
    )
     :
     (
      <span className='empty-message'>Cart is empty </span>

     )}

   </div>
   <CustomButtom onClick={() => {
    history.push('/checkout');
    dispatch(toggleCartHidden());
   }}>GO TO CHECKOUT</CustomButtom>
  </div>
 );
}
const mapStateToProps = state => ({
 cartItems: selectCartItems(state)
});
export default withRouter(connect(mapStateToProps)(Cart));