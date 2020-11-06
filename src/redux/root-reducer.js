//code that combine all our state together
import { combineReducers } from 'redux'
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import apiReducer from './shop/shop.reducer';



export default combineReducers({
 cart: cartReducer,
 directory: directoryReducer,
 api: apiReducer,

})