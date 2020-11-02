import React from 'react'
import './collectionItem.styles.scss'
const collectionItem = ({ id, name, price, imageUrl }) => {

 return (
  <div className='collection-item'>
   <div className='image'
    style={{
     backgroundImage: `url(${imageUrl})`
    }}
   />
   <div className="collection-footer">
    <span className='name'>{name}</span>
    <br />
    <span className='price'>cost: {price}$</span>
   </div>
  </div>
 )


}
export default collectionItem;