import React from 'react'
import './homepage.styles.scss'
import Directory from '../../components/directory/Directory.js'
// import MenuItem from '../../components/menu/MenuItem.js'

function Homepage() {
 return (
  <>

   <div className='homepage'>
    <Directory />
    <div className='homepage-h5'>
     <h5>Go to  "SHOP"  to see our collections</h5>
    </div>
   </div>

  </>
 );
}
export default Homepage;