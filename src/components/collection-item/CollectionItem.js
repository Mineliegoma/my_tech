import React from 'react'
import { connect } from 'react-redux';
import './collectionItem.styles.scss'
import CustomButtom from '../custom-buttom/CustomButtom';
import { addItem } from '../../redux/cart/cart.actions'
const collectionItem = ({ detail, addItem }) => {
 const { name, price, imageUrl } = detail;
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
    <span className='price'>cost: ${price}</span>
   </div>
   <CustomButtom onClick={() => addItem(detail)} inverted>Add to cart</CustomButtom>
  </div>
 );
}
const mapDispatchToProps = dispatch => ({
 addItem: detail => dispatch(addItem(detail))
})
export default connect(null, mapDispatchToProps)(collectionItem);