import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
  pedals: [],
  buildHistory: [],
  pedalsOnBoard: [],
  currentPedalboard: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PEDAL:
      const findPedal = state.pedals.find(pedal => pedal.id === action.id)
      const newPedalProperties = { rotation: 0, showButtons: false, posX: null, posY: null }
      const transformedPedal = Object.assign(findPedal, newPedalProperties)
      return {
        ...state,
        pedalsOnBoard: state.pedalsOnBoard.concat(transformedPedal)
      }

    case actionTypes.REMOVE_PEDAL:
      const stateCopy = [...state.pedalsOnBoard]
      const deleteIndex = stateCopy.findIndex(pedal => pedal.id === action.id)
      stateCopy.splice(deleteIndex, 1)
      return {
        ...state,
        pedalsOnBoard: stateCopy
      }

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
