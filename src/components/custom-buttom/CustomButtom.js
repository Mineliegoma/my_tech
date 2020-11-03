import React from 'react'
import './button.styles.scss'
const CustomButtom = ({ children, inverted, ...otherProps }) => {
 return (
  <button className={`${inverted ? 'inverted' : ''} custom-button`} {...otherProps}>
   {children}

  </button>
 );
}
export default CustomButtom