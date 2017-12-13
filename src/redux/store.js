import { applyMiddleware, createStore, compose } from 'redux';
import enhancers from './enhancers';
import middleware from './middleware';
import reducer from './reducers';

// Enable redux dev tools only in development.
const composeEnhancers =
  (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(...enhancers, applyMiddleware(...middleware));

// create the store
const store = createStore(reducer, enhancer);

export default store;
