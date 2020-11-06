// import { combineReducers } from 'redux'
// const INITIAL_STATE = {
//  collections: [],

//  componentDidMount() {
//   fetch('http://localhost:3000/api/v1/items')
//    .then(res => res.json())
//    .then(resp => this.setState({ collections: resp }))
//    .catch(console.log)
//  }
// }
// const shopReducer = (state = INITIAL_STATE, action) => {
//  switch (action.type) {
//   default:
//    return state;
//  }
// }
// export default shopReducer;

let defaultState = {
 api: [],

}
function apiReducer(state = defaultState.api, action) {
 switch (action.type) {
  case 'GET_ITEMS':
   return action.payload
   break;
  default:
   return state
   break;
 }

}
// function usereducer() {

// }
// let rootReducer = combineReducers({
//  collections: collectionsReducer,
// })
// export default rootReducer

export default apiReducer
