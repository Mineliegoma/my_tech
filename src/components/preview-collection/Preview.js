// import { findAllByTitle } from '@testing-library/react'
import React from 'react'

import './preview.styles.scss'

import CollectionItem from '../collection-item/CollectionItem'
// import collectionItem from '../collection-item/CollectionItem'
const Preview = ({ title, details }) => {
 return (
  <div className='collection-preview'>
   <h1 className='title'>{title.toUpperCase()}</h1>
   <div className='preview'>
    {
     details.filter((detail, idx) => idx < 4).map((detail) => (<CollectionItem key={detail.id} detail={detail} />))
    }
   </div>
   {/* filter(el => el.title.toLowerCase().includes(this.state.searchRec.toLowerCase())) */}

  </div>
 )
}


export default Preview