import axios from 'axios';
import _ from 'lodash';

import Constants from '../../utils/Constants';
import { getRestaurantsSuccess, startLoadingRestaurants } from './SearchState';

export const getAllRestaurants = (pageCount) => dispatch => {  
  // Creating an array of Promises so we can resolve them all at once
  // and dispatch a success message once they are all done.
  let promiseArray = []

  // Create as many promises to promiseArray as we need, based
  // on what the API just told us earlier about the pageCount
  for(let currentPage = 1; currentPage <= pageCount; currentPage++) {
    url = `${Constants.API_ROOT}/restaurants?max_results=${Constants.MAX_RESULTS}&page=${currentPage}`
    promiseArray.push(axios.get(`${url}`))
  }

  // Resolve the array of Promises and then dispatch a success message
  // and connect the data to Redux Store.
  axios.all(promiseArray)
  .then((results) => {
    // This shitty API gives us an unfortunate format of data so we get
    // separate arrays for each request and need to flatten them.
    const restaurants = _.flatten(results.map(res => res.data.restaurants))
    dispatch(getRestaurantsSuccess(restaurants))
  }).catch((err) => {
    console.log(`Something not so nice happened: ${err}`)
  })
}

export const getRestaurantRequestCount = () => dispatch => {
    // Start the Loading animation before we resolve our promises
    dispatch(startLoadingRestaurants())

    // Due to the nature of the API we need to fetch how many pages
    // of Restaurants there are initially.
    axios.get(`${Constants.API_ROOT}/restaurants?max_results=${Constants.MAX_RESULTS}`)
      .then(response => {
        // Now we have the number of promises we need to chain so fetching
        // the actual data we want here.
        dispatch(getAllRestaurants(response.data.num_pages))
      })
      .catch((err) => {
        console.log(`Something not so nice happened: ${err}`)
      })
}