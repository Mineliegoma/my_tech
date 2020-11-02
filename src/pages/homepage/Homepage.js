import React from 'react'
import './homepage.styles.scss'
import Directory from '../../components/directory/Directory.js'
// import MenuItem from '../../components/menu/MenuItem.js'

function Homepage() {
 return (
  <>
   {/* <div className='homepage'>
    <div className='directory-menu'>
     <div className="menu-item">
      <div className='content'>
       <h1 classname='title'>Watches</h1>
       <span className="subtitle">SHOP NOW</span>
      </div>
     </div>
     <div className="menu-item">
      <div className='content'>
       <h1 classname='title'>Phones</h1>
       <span className="subtitle">SHOP NOW</span>
      </div>
     </div>
     <div className="menu-item">
      <div className='content'>
       <h1 classname='title'>Camera</h1>
       <span className="subtitle">SHOP NOW</span>
      </div>
     </div>
    </div>
   </div> */}
   <Directory />
  </>
 );
}
export default Homepage;