import React from 'react'
import CustomButtom from '../custom-buttom/CustomButtom.js'
import './cart.styles.scss'
const Cart = () => {
 return (
  <div className='cart-dropdown'>
   <div className="cart-items">
    <CustomButtom>GO TO CHECKOUT</CustomButtom>
   </div>
  </div>
 );
}
export default Cart;