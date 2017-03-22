
import _ from 'lodash'
import { RECEIVE_REVIEWS } from '../actions/reviews'

const initialState = [

]

export default function reviews(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_REVIEWS:
      return state.concat(_.cloneDeep(action.json))
    default:
      return state
  }
}
