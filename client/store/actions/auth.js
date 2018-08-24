import * as actionTypes from './actionTypes'

export const fetchUser = () => async dispatch => {
  const response = await fetch('/auth/api/current_user')
  const data = await response.json()
  dispatch({ type: actionTypes.FETCH_USER, payload: data })
}
