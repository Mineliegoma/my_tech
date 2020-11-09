import React from 'react'
import './collection.styles.scss'
import _ from "lodash"
import { connect } from 'react-redux'
// import Preview from '../../components/preview-collection/Preview.js'

// import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/CollectionItem'
// import ApiOverview from '../../components/api-overview/ApiOverview.js'

const Collection = ({ collections }) => {


 console.log('hehehehe', collections)

 // constrenderSpecificCollection = (obj) => {
 //  collections.find(collection => collection.id === collection(obj))
 // }

 return (
  <div className='category'>
   <h2>CATEGORY PAGE</h2>
   {/* {this.renderItemsbyId()} */}
   {/* <ApiOverview /> */}


  </div>
 )


}

// const mapStateToProps = () => ({
//  // item: this.state.find(state, { id: ownProps.params.CollectionId })


// });
// const mapStateToProps = (state, ownProps) => ({ item: state.api.find((e) => e.id == ownProps.match.params.collectionId) });


function mapStateToProps(state, ownProps) {
 console.log('hehe', ownProps)
 return {
  collections: state.api.find((obj) => obj.pathName == ownProps.match.params.collectionId)
  // 
  // collections: state.api.find((obj) => e.pathName == ownProps.params.collectionId)
 }
}


export default connect(mapStateToProps)(Collection);


// import React from 'react'
// import { connect } from 'react-redux'
// // import { createStructuredSelector } from 'reselect';
// // import { selectCollections } from '../../redux/shop/shop.selectors'
// import Preview from '../../components/preview-collection/Preview.js'
// // import { getItems } from '../../redux/shop/shop.actions'
// // import Search from '../../components/search/Search.js'
// import './apiOverview.styles.scss'



// class ApiOverview extends React.Component {

//  //  renderItems = () => {
//  //     return this.props.items.map(({ id, ...otherCollectionProps }) => (<Preview key={id} {...otherCollectionProps} />))
//  //   } 

//  render() {

//   // console.log('hehe', this.props)
//   return (
//    <>
//     {/* <Search search={this.state.search} searchHandler={this.searchChange} /> */}
//     <div className="collections-overview">
//      {
//       this.props.items.map(({ id, ...otherCollectionProps }) => (<Preview key={id} {...otherCollectionProps} />))

//      }

//      {/* {this.renderItems()} */}
//     </div>
//    </>

//   )
//  }
// };
// function mapStateToProps(state) {
//  // console.log('hehe', state.api)
//  return {
//   items: state.api
//  }

// }

// export default connect(mapStateToProps)(ApiOverview);