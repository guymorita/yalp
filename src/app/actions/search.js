
import {
  fetchReviewsIfNeeded
} from './reviews'

export const SEARCH_NEW = 'SEARCH_NEW'

function searchLog(search, location) {
  return {
    type: SEARCH_NEW,
    search,
    location
  }
}

export function searchNew(search, location) {
  return dispatch => {
    dispatch(searchLog(search, location))
    return dispatch(fetchReviewsIfNeeded())
  }
}

