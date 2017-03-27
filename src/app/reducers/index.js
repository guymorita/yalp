
import { combineReducers } from 'redux'

import auth from './auth'
import reviews from './reviews'
import search from './search'
import filters from './filters'

export default combineReducers({
  auth,
  reviews,
  search,
  filters
})
