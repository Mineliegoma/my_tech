import React from 'react'
import { connect } from 'react-redux'
// import { createStructuredSelector } from 'reselect';
// import { selectCollections } from '../../redux/shop/shop.selectors'
import Preview from '../../components/preview-collection/Preview.js'
// import { getItems } from '../../redux/shop/shop.actions'
// import Search from '../../components/search/Search.js'
import './apiOverview.styles.scss'



class ApiOverview extends React.Component {

 //  renderItems = () => {
 //     return this.props.items.map(({ id, ...otherCollectionProps }) => (<Preview key={id} {...otherCollectionProps} />))
 //   } 

 render() {

  // console.log('hehe', this.props)
  return (
   <>
    {/* <Search search={this.state.search} searchHandler={this.searchChange} /> */}
    <div className="collections-overview">
     {
      this.props.items.map(({ id, ...otherCollectionProps }) => (<Preview key={id} {...otherCollectionProps} />))

     }

     {/* {this.renderItems()} */}
    </div>
   </>

  )
 }
};
function mapStateToProps(state) {
 // console.log('hehe', state.api)
 return {
  items: state.api
 }

}

export default connect(mapStateToProps)(ApiOverview);