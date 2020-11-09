import React from 'react'
import './collection.styles.scss'
import { connect } from 'react-redux'

import CollectionItem from '../../components/collection-item/CollectionItem'
import './collection.styles.scss'

const Collection = ({ collect }) => {

 // const { details, title } = collect? 
 console.log('hehehehe for the collect', collect)




 return (
  <div className='collection-page'>
   <h2 className='title'>{collect?.title}</h2>
   <div className='items'>
    {
     collect?.details?.map(detail => (<CollectionItem key={detail.id} detail={detail} />))
    }

   </div>


  </div>
 );


}

function mapStateToProps(state, ownProps) {
 console.log('hehe', ownProps)
 return {
  collect: state.api.find((obj) => obj.pathName === ownProps.match.params.collectionId)

  // collections: state.api.find((obj) => e.pathName == ownProps.params.collectionId)
 }
}


export default connect(mapStateToProps)(Collection);


