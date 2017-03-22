
import config from '../../config'

export const REQUEST_TOKEN = 'REQUEST_TOKEN'
export const RECEIVE_TOKEN = 'RECEIVE_TOKEN'

function requestToken() {
  return {
    type: REQUEST_TOKEN
  }
}

function receiveToken(json) {
  return {
    type: RECEIVE_TOKEN,
    credentials: json
  }
}

function fetchToken(state) {
  return dispatch => {
    dispatch(requestToken())
    const params = {
      client_id: config.YELP_APP_ID,
      client_secret: config.YELP_SECRET_ID,
      grant_type: 'client_credentials'
    }

    const request = new Request('https://api.yelp.com/oauth2/token', {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      }),
      body: `client_id=${params.client_id}&client_secret=${params.client_secret}&grant_type=${params.grant_type}`
    });

    return fetch(request)
      .then(response => {
        return response.json()
      })
      .then(json => {
        return dispatch(receiveToken(json))
      })
  }
}

function shouldFetchToken(state) {
  const hasToken = !!state.auth.access_token
  if (hasToken) {
    return false
  } else {
    return true
  }
}

export function fetchTokenIfNeeded() {
  return (dispatch, getState) => {
    const state = getState()
    if (shouldFetchToken(state)) {
      return dispatch(fetchToken(state))
    }
  }
}
