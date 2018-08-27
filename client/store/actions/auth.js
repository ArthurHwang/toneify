import * as actionTypes from './actionTypes'

export const fetchUser = () => async dispatch => {
  const response = await fetch('/auth/api/current_user')
  const data = await response.json()
  dispatch({ type: actionTypes.FETCH_USER, payload: data })
}

export const handleToken = (token, amount, pedalboard, pedals) => async dispatch => {
  const response = await fetch('/billing/stripe', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token, amount, pedalboard, pedals })
  })
  const data = await response.json()
  dispatch({ type: actionTypes.FETCH_USER, payload: data })
}
