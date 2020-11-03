//code that combine all our state together
import { combineReducers } from 'redux'
import cartReducer from './cart/cart.reducer';


export default combineReducers({
 cart: cartReducer,

})