
import {
  RESET_FILTERS,
  TOGGLE_CATEGORY_FILTER
} from '../actions/filters'

const defaultCategories = [
  {name: 'Bars', filter: false},
  {name: 'Hiking', filter: false},
  {name: 'Japanese', filter: false},
  {name: 'Korean', filter: false},
  {name: 'Mexican', filter: false},
  {name: 'Peruvian', filter: false},
  {name: 'Speakeasies', filter: false},
  {name: 'Vietnamese', filter: false}
]

const initialState = {
  categories: defaultCategories
}

export default function reviews(state = initialState, action) {
  switch(action.type) {
    case RESET_FILTERS:
      return {
        ...state,
        categories: [...defaultCategories]
      }
    case TOGGLE_CATEGORY_FILTER:
      const { category, bool } = action
      const { categories } = state
      const findFilterIndex = (obj) => { return obj.name === category }
      const filterIndex = categories.findIndex(findFilterIndex)
      const categoriesCopy = [
        ...categories.slice(0,filterIndex),
        {
          name: category,
          filter: bool
        },
        ...categories.slice(filterIndex + 1)
      ]
      return {
        ...state,
        categories: categoriesCopy
      }
    default:
      return state
  }
}
