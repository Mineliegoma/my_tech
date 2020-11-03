import React from 'react'
import { connect } from 'react-redux'
import CustomButtom from '../custom-buttom/CustomButtom.js'
import './cart.styles.scss'
import CartItem from '../cart-item/CartItem.js'
import { selectCartItems } from '../../redux/cart/cart.selectors'

const Cart = ({ cartItems }) => {
 return (
  <div className='cart-dropdown'>
   <div className="cart-items">
    {
     cartItems.map(cartItem => (<CartItem key={cartItem.id} detail={cartItem} />))
    }
   </div>
   <CustomButtom>GO TO CHECKOUT</CustomButtom>
  </div>
 );
}
const mapStateToProps = state => ({
 cartItems: selectCartItems(state)
});
export default connect(mapStateToProps)(Cart);