
import {
  SEARCH_NEW
} from '../actions/search'

const initialState = [
]

export default function search(state = initialState, action) {
  switch(action.type) {
    case SEARCH_NEW:
      const newSearch = {
        search: action.search,
        location: action.location,
        date: Date.now()
      }
      return state.concat(newSearch)
    default:
      return state
  }
}
