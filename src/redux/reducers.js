import { combineReducers } from 'redux';

// ## Reducer Imports ##
import SearchStateReducer from '../containers/Search/SearchState'

export default combineReducers({
  // ## Reducers ##
  searchState: SearchStateReducer,

});