import React from 'react';
import './menu.styles.scss'

const MenuItem = ({ title, imageUrl }) => {
 return (
  <>
   <div style={{
    backgroundImage: `url(${imageUrl})`
   }} className="menu-item">
    <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className='content'>
     <h1 classname='title'>{title.toUpperCase()}</h1>
     {/* <img className="background" alt=" ">{imageUrl}</img> */}
     <span className="subtitle">SHOP NOW</span>
    </div>
   </div>
  </>

 )


}
export default MenuItem