// ------------------------------------
// Constants
// ------------------------------------

export const START_LOADING_RESTAURANTS = 'START_LOADING_RESTAURANTS'
export const ON_GET_ALL_RESTAURANTS_SUCCESS = 'ON_GET_ALL_RESTAURANTS_SUCCESS'


// ------------------------------------
// Actions
// ------------------------------------

export function getRestaurantsSuccess(value) {
  return {
    type: ON_GET_ALL_RESTAURANTS_SUCCESS,
    payload: value
  }
}

export function startLoadingRestaurants() {
  return {
    type: START_LOADING_RESTAURANTS
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  ON_GET_ALL_RESTAURANTS_SUCCESS: (state, action) => ({
    ...state,
    restaurants: action.payload,
    loading: false
  }),  
  START_LOADING_RESTAURANTS: (state, action) => ({
    ...state,
    loading: true
  })
}

// ------------------------------------
// Reducer ** Initial values
// ------------------------------------

const initialState = {
  restaurants: [],
  requestApiCount: 0,
  loading: false
}

export default function SearchStateReducer(state = initialState, action = {}) {
  const handler = ACTION_HANDLERS[action.type]
  
  return handler ? handler(state, action) : state
}