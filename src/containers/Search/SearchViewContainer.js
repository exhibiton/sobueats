import { connect } from 'react-redux'
import SearchView from './SearchView'

import { getRestaurantRequestCount, getAllRestaurants } from './SearchViewApi'

const mapStateToProps = state => ({
  restaurants: state.restaurants,
  requestApiCount: state.requestApiCount,
  loading: state.loading
})

const mapDispatchToProps = {
  getRestaurantRequestCount,
  getAllRestaurants,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchView)