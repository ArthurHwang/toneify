import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
  pedals: [],
  buildHistory: [],
  pedalsOnBoard: [],
  currentDraggedId: null,
  showHint: false,
  currentPedalboard: null,
  isEditing: false,
  buildToBeUpdated: false,
  showButtons: false
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
      const stateCopyRemove = [...state.pedalsOnBoard]
      const deleteIndex = stateCopyRemove.findIndex(pedal => pedal.id === action.id)
      stateCopyRemove.splice(deleteIndex, 1)
      return {
        ...state,
        pedalsOnBoard: stateCopyRemove
      }

    case actionTypes.SHOW_BUTTONS:
      const stateCopyShow = [...state.pedalsOnBoard]
      stateCopyShow.find(pedal => {
        if (pedal.id === action.id) {
          pedal.showButtons = true
        }
      })
      return {
        ...state,
        pedalsOnBoard: stateCopyShow
      }
    case actionTypes.HIDE_BUTTONS:
      const stateCopyHide = [...state.pedalsOnBoard]
      stateCopyHide.find(pedal => {
        if (pedal.id === action.id) {
          pedal.showButtons = false
        }
      })
      return {
        ...state,
        pedalsOnBoard: stateCopyHide
      }
    case actionTypes.ROTATE_PEDAL:
      const stateCopyRotate = [...state.pedalsOnBoard]
      stateCopyRotate.find(pedal => {
        if (pedal.id === action.id) {
          pedal.rotation >= 360 ? (pedal.rotation = 0) : (pedal.rotation += 90)
        }
      })
      return {
        ...state,
        pedalsOnBoard: stateCopyRotate
      }
    case actionTypes.CURRENT_DRAGGED_ID:
      return {
        ...state,
        currentDraggedId: action.id
      }

    case actionTypes.ON_CONTROLLED_DRAG:
      const { x, y } = action.position
      const stateCopyDrag = [...state.pedalsOnBoard]
      stateCopyDrag.find(elem => {
        if (elem.id === state.currentDraggedId) {
          elem.posX = x
          elem.posY = y
        }
      })
      return {
        ...state,
        pedalsOnBoard: stateCopyDrag,
        isEditing: true,
        buildToBeUpdated: true
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
