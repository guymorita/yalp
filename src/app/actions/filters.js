
export const TOGGLE_CATEGORY_FILTER = 'TOGGLE_CATEGORY_FILTER'
export const RESET_FILTERS = 'RESET_FILTERS'

export function resetFilters() {
  return {
    type: RESET_FILTERS
  }
}

export function toggleCategoryFilter(category, bool) {
  return {
    type: TOGGLE_CATEGORY_FILTER,
    category,
    bool
  }
}