import React from 'react'
import { Route } from 'react-router-dom';
import Collection from '../collections/Collection.js'

import ApiOverview from '../../components/api-overview/ApiOverview'

const Shoppage = ({ match }) => {
  console.log(match);
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={ApiOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />

    </div>
  )
}
export default Shoppage