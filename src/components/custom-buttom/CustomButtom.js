import React from 'react'
import './button.styles.scss'
const CustomButtom = ({ children, ...otherProps }) => {
 return (
  <button className='custom-buttom' {...otherProps} >
   {children}

  </button>
 );
}
export default CustomButtom