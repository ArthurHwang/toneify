import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
  data: null
}

const fetchUser = (state, action) => {
  const updatedState = { data: action.payload }
  return updateObject(state, updatedState)
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER:
      return fetchUser(state, action) || false
    default:
      return state
  }
}

export default reducer
