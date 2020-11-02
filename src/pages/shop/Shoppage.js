import React from 'react'
import Preview from '../../components/preview-collection/Preview.js'
class Shoppage extends React.Component {
 state = {
  collections: []
 }
 componentDidMount() {
  fetch('http://localhost:3000/api/v1/items')
   .then(res => res.json())
   .then(resp => this.setState({ collections: resp }))
   .catch(console.log)
 }



 render() {
  const { collections } = this.state;
  return (
   <>
    <div className="shop-page">
     {
      collections.map(({ id, ...otherCollectionProps }) => (<Preview key={id} {...otherCollectionProps} />))

     }
    </div>


   </>

  )
 }

}
export default Shoppage