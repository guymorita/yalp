
import qs from 'qs'

export const REQUEST_REVIEWS = 'REQUEST_REVIEWS'
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'

function requestReviews() {
  return {
    type: REQUEST_REVIEWS
  }
}

function receiveReviews() {
  return {
    type: RECEIVE_REVIEWS
  }
}

function fetchReviews(state) {
  return dispatch => {
    dispatch(requestReviews())
    const access_token = state.auth.access_token
    const bearer = `Bearer ${access_token}`
    const params = {
      term: 'pizza',
      location: 'san francisco'
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
        console.log('json', json)
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
