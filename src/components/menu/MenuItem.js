import React from 'react';
import './menu.styles.scss'
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => {
 return (
  <>
   <div style={{
    backgroundImage: `url(${imageUrl})`
   }} className="menu-item" onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className='content'>
     <h1 className='title'>{title.toUpperCase()}</h1>
     {/* <img className="background" alt=" ">{imageUrl}</img> */}
     <span className="subtitle">SHOP NOW</span>
    </div>
   </div>
  </>

 )


}
export default withRouter(MenuItem);