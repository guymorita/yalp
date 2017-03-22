
export const SEARCH_NEW = 'SEARCH_NEW'

export function searchNew(search, location) {
  return {
    type: SEARCH_NEW,
    search,
    location
  }
}
