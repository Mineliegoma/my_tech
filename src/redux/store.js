import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import rootReducer from './root-reducer';
const middlewares = [logger];
// const thunks = [thunk]
export const store = createStore(rootReducer, applyMiddleware(...middlewares, thunk))
export const persistor = persistStore(store);
export default { store, persistor };