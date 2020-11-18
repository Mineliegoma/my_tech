import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './navbar.styles.scss'


import CartIcon from '../cart-icon/CartIcon.js';
import Cart from '../cart/Cart.js';
const NavBar = ({ hidden }) => {
  return (
    <>

      <div className='header'>

        {/* <img className="my-image" src="images/gadgets.png" alt="" /> */}
        <Link className='logo-container' to='/' >HOME</Link>

        <div className='options'>

          <Link className='option' to='/shop'>SHOP</Link>
          <Link className='option' to='/contact'>CONTACT</Link>
          <Link className='option' to='/account'>ACCOUNT</Link>

          <CartIcon />
        </div>
        {
          hidden ? null :
            <Cart />
        }

      </div>
      <div className="p-tag">
        <p >WELCOME TO GADGETS TECH </p>


      </div>
    </>
  );
}
const mapStateToProps = ({ cart: { hidden } }) => ({
  hidden,
});


export default connect(mapStateToProps)(NavBar);