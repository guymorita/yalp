
import { combineReducers } from 'redux'

import auth from './auth'
import reviews from './reviews'
import search from './search'

export default combineReducers({
  auth,
  reviews,
  search
})
