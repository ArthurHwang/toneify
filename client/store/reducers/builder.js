import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
  pedals: [],
  buildHistory: []

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PEDALS:
      return {
        ...state,
        pedals: action.pedals
      }
    case actionTypes.SET_BUILD_HISTORY:
      return {
        ...state,
        buildHistory: action.buildHistory
      }
    default:
      return state
  }
}

export default reducer
