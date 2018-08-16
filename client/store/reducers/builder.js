import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'


const initialState = {
  pedals: [],
  buildHistory: [],
  pedalsOnBoard: [],
  youtubePedalResults: [],
  currentDraggedId: null,
  showHint: false,
  currentPedalboard: null,
  isEditing: false,
  buildToBeUpdated: false,
  showButtons: false,
  showSaveCompleteModal: false
}

const addPedal = (state, action) => {
  const findPedal = state.pedals.find(pedal => pedal.id === action.id)
  const newPedalProperties = { rotation: 0, showButtons: false, posX: null, posY: null }
  const transformedPedal = Object.assign(findPedal, newPedalProperties)
  const updatedState = { pedalsOnBoard: state.pedalsOnBoard.concat(transformedPedal) }
  return updateObject(state, updatedState)
}

const removePedal = (state, action) => {
  const stateCopy = [...state.pedalsOnBoard]
  const deleteIndex = stateCopy.findIndex(pedal => pedal.id === action.id)
  stateCopy.splice(deleteIndex, 1)
  const updatedState = { pedalsOnBoard: stateCopy }
  return updateObject(state, updatedState)
}

const removeAllPedals = (state, action) => {
  const updatedState = {
    pedalsOnBoard: [],
    buildToBeUpdated: false,
    isEditing: false
  }
  return updateObject(state, updatedState)
}

const showButtons = (state, action) => {
  const stateCopy = [...state.pedalsOnBoard]
  stateCopy.find(pedal => {
    if (pedal.id === action.id) {
      pedal.showButtons = true
    }
  })
  const updatedState = { pedalsOnBoard: stateCopy }
  return updateObject(state, updatedState)
}

const hideButtons = (state, action) => {
  const stateCopy = [...state.pedalsOnBoard]
  stateCopy.find(pedal => {
    if (pedal.id === action.id) {
      pedal.showButtons = false
    }
  })
  const updatedState = { pedalsOnBoard: stateCopy }
  return updateObject(state, updatedState)
}

const rotatePedal = (state, action) => {
  const stateCopy = [...state.pedalsOnBoard]
  stateCopy.find(pedal => {
    if (pedal.id === action.id) {
      pedal.rotation >= 360 ? (pedal.rotation = 0) : (pedal.rotation += 90)
    }
  })
  const updatedState = { pedalsOnBoard: stateCopy }
  return updateObject(state, updatedState)
}

const currentDraggedId = (state, action) => {
  const updatedState = { currentDraggedId: action.id }
  return updateObject(state, updatedState)
}

const onControlledDrag = (state, action) => {
  const { x, y } = action.position
  const stateCopy = [...state.pedalsOnBoard]
  stateCopy.find(pedal => {
    if (pedal.id === state.currentDraggedId) {
      pedal.posX = x
      pedal.posY = y
    }
  })
  const updatedState = {
    pedalsOnBoard: stateCopy,
    isEditing: true,
    buildToBeUpdated: true
  }
  return updateObject(state, updatedState)
}

const setSaveBuild = (state, action) => {
  const updatedState = {
    buildHistory: state.buildHistory.concat(action.build),
    showSaveCompleteModal: true
  }
  return updateObject(state, updatedState)
}

const setYoutubeResults = (state, action) => {
  const updatedState = { youtubePedalResults: action.videos }
  return updateObject(state, updatedState)
}
// const deleteBuild = (state, action) => {
//
// }
//
// const loadBuild = (state, action) => {
//
// }
//
// const updateBuild = (state, action) => {
//
// }

const setCurrentPedalboard = (state, action) => {
  const updatedState = { currentPedalboard: action.pedalboard }
  return updateObject(state, updatedState)
}

const setPedals = (state, action) => {
  const updatedState = { pedals: action.pedals }
  return updateObject(state, updatedState)
}

const setBuildHistory = (state, action) => {
  const updatedState = { buildHistory: action.buildHistory }
  return updateObject(state, updatedState)
}

const closeSaveModal = (state, action) => {
  const updatedState = { showSaveCompleteModal: false }
  return updateObject(state, updatedState)
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PEDAL: return addPedal(state, action)
    case actionTypes.REMOVE_PEDAL: return removePedal(state, action)
    case actionTypes.REMOVE_ALL_PEDALS: return removeAllPedals(state, action)
    case actionTypes.SHOW_BUTTONS: return showButtons(state, action)
    case actionTypes.HIDE_BUTTONS: return hideButtons(state, action)
    case actionTypes.ROTATE_PEDAL: return rotatePedal(state, action)
    case actionTypes.CURRENT_DRAGGED_ID: return currentDraggedId(state, action)
    case actionTypes.ON_CONTROLLED_DRAG: return onControlledDrag(state, action)
    case actionTypes.SAVE_BUILD: return setSaveBuild(state, action)
    case actionTypes.SET_PEDALS: return setPedals(state, action)
    case actionTypes.CLOSE_SAVE_MODAL: return closeSaveModal(state, action)
    case actionTypes.SET_BUILD_HISTORY: return setBuildHistory(state, action)
    case actionTypes.INIT_CURRENT_PEDALBOARD: return setCurrentPedalboard(state, action)
    case actionTypes.SET_YOUTUBE_RESULTS: return setYoutubeResults(state, action)
    default:
      return state
  }
}

export default reducer
