import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import rootReducer from './root-reducer';
const middlewares = [logger];
// const thunks = [thunk]
const store = createStore(rootReducer, applyMiddleware(...middlewares, thunk))
export default store;