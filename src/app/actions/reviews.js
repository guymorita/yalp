
import qs from 'qs'

export const REQUEST_REVIEWS = 'REQUEST_REVIEWS'
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'

function requestReviews() {
  return {
    type: REQUEST_REVIEWS
  }
}

function receiveReviews(json) {
  return {
    type: RECEIVE_REVIEWS,
    json
  }
}

function fetchReviews(state) {
  return dispatch => {
    dispatch(requestReviews())
    const access_token = state.auth.access_token
    const bearer = `Bearer ${access_token}`
    const { search, location } = state.search[state.search.length -1]
    const { filters } = state
    const { categories } = filters
    const categoriesToFilter = categories.filter((category) => {
      return category.filter === true
    })
    const params = {
      term: search,
      location: location
    }

    if (categoriesToFilter.length) {
      const categoryNames = categoriesToFilter.map((category) => { return category.name.toLowerCase() })
      params.categories = categoryNames.join(',')
    }

    console.log('params', params)

    const stringParams = qs.stringify(params)
    const url = 'https://api.yelp.com/v3/businesses/search'
    const query = `${url}?${stringParams}`

    const request = new Request(query, {
      method: 'GET',
      headers: new Headers({
        Authorization: bearer
      }),
    });

    return fetch(request)
      .then(response => {
        return response.json()
      })
      .then(json => {
        return dispatch(receiveReviews(json))
      })
  }
}

export function fetchReviewsIfNeeded() {
  return (dispatch, getState) => {
    const state = getState()
    return dispatch(fetchReviews(state))
  }
}
