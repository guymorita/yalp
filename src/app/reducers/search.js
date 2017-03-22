
import {
  SEARCH_NEW
} from '../actions/search'

const initialState = [
  {
    search: 'pho',
    location: 'san francisco',
    date: Date.now()
  }
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
