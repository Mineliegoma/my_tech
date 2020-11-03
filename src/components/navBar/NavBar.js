import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './navbar.styles.scss'
import CartIcon from '../cart-icon/CartIcon.js'
import Cart from '../cart/Cart.js'
const NavBar = ({ hidden }) => {
 return (
  <div className='header'>
   <Link className='logo-container' to='/' >HOME</Link>
   <div className='options'>
    <Link className='option' to='/shop'>SHOP</Link>
    <Link className='option' to='/contact'>CONTACT</Link>
    <CartIcon />
   </div>
   {
    hidden ? null :
     <Cart />
   }

  </div>
 );
}
const mapStateToProps = ({ cart: { hidden } }) => ({
 hidden,
});


export default connect(mapStateToProps)(NavBar);