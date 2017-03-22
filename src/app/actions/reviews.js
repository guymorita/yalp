
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
    const params = {
      term: search,
      location: location
    }

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
