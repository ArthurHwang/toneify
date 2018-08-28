import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
  pedals: [],
  buildHistory: [],
  pedalsOnBoard: [],
  youtubePedalResults: [],
  currentDraggedId: null,
  showHint: true,
  currentPedalboard: null,
  isEditing: false,
  buildToBeUpdated: false,
  showButtons: false,
  showSaveCompleteModal: false,
  showHistoryModal: false,
  currentBuildId: null,
  showUpdateModal: false,
  totalPrice: 0
}

const addPedal = (state, action) => {
  const findPedal = state.pedals.find(pedal => pedal.id === action.id)
  const newPedalProperties = { rotation: 0, showButtons: false, posX: null, posY: null }
  const transformedPedal = Object.assign(findPedal, newPedalProperties)
  let updatedState = null
  const price = state.totalPrice + findPedal.price

  if (state.currentBuildId) {
    updatedState = {
      pedalsOnBoard: state.pedalsOnBoard.concat(transformedPedal),
      isEditing: true,
      buildToBeUpdated: true,
      showHint: false,
      totalPrice: price
    }
  } else {
    updatedState = {
      pedalsOnBoard: state.pedalsOnBoard.concat(transformedPedal),
      isEditing: false,
      buildToBeUpdated: false,
      showHint: false,
      totalPrice: price
    }
  }
  return updateObject(state, updatedState)
}

const removePedal = (state, action) => {
  const stateCopy = [...state.pedalsOnBoard]
  const deleteIndex = stateCopy.findIndex(pedal => pedal.id === action.id)
  const price = state.totalPrice - stateCopy[deleteIndex].price
  stateCopy.splice(deleteIndex, 1)
  const updatedState = { pedalsOnBoard: stateCopy, totalPrice: price }
  return updateObject(state, updatedState)
}

const removeAllPedals = (state, action) => {
  const updatedState = {
    pedalsOnBoard: [],
    buildToBeUpdated: false,
    isEditing: false,
    youtubePedalResults: [],
    currentBuildId: null,
    totalPrice: state.currentPedalboard.price
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
  let updatedState = null
  const stateCopy = [...state.pedalsOnBoard]
  stateCopy.find(pedal => {
    if (pedal.id === state.currentDraggedId) {
      pedal.posX = x
      pedal.posY = y
    }
  })
  if (state.currentBuildId) {
    updatedState = {
      pedalsOnBoard: stateCopy,
      isEditing: true,
      buildToBeUpdated: true
    }
  } else {
    updatedState = {
      pedalsOnBoard: stateCopy,
      isEditing: false,
      buildToBeUpdated: false
    }
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

const setUpdateBuild = (state, action) => {
  const stateCopy = [...state.buildHistory]
  const newBuildHistory = stateCopy.map(build => {
    if (build.id === state.currentBuildId) {
      build = action.build
      return build
    } else {
      return build
    }
  })
  const updatedState = {
    buildHistory: newBuildHistory,
    isEditing: false,
    buildToBeUpdated: false,
    showUpdateModal: true
  }
  return updateObject(state, updatedState)
}

const setYoutubeResults = (state, action) => {
  const updatedState = { youtubePedalResults: action.videos }
  return updateObject(state, updatedState)
}

const setCurrentPedalboard = (state, action) => {
  let price = null
  let pedalboardPrice = null

  if (state.pedalsOnBoard) {
    state.pedalsOnBoard.forEach(pedal => (price += pedal.price))
  }
  if (action.pedalboard) {
    pedalboardPrice = action.pedalboard.price
  }

  const updatedState = { currentPedalboard: action.pedalboard, totalPrice: pedalboardPrice + price }
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

const setDeleteBuild = (state, action) => {
  const stateCopy = [...state.buildHistory]
  const buildIndex = stateCopy.findIndex(build => build.id === action.id)
  stateCopy.splice(buildIndex, 1)
  const updatedState = { buildHistory: stateCopy }
  return updateObject(state, updatedState)
}

const setLoadBuild = (state, action) => {
  let price = action.build.pedalBoard.price
  action.build.pedals.forEach(pedal => {
    price += pedal.price
  })
  const updatedState = {
    currentPedalboard: action.build.pedalBoard,
    pedalsOnBoard: action.build.pedals,
    showHistoryModal: false,
    isEditing: true,
    currentBuildId: action.build.id,
    youtubePedalResults: [],
    totalPrice: price,
    showHint: false
  }
  return updateObject(state, updatedState)
}

const openHistoryModal = (state, action) => {
  const updatedState = {
    showHistoryModal: true
  }
  return updateObject(state, updatedState)
}

const closeHistoryModal = (state, action) => {
  const updatedState = {
    showHistoryModal: false
  }
  return updateObject(state, updatedState)
}

const openUpdateModal = (state, action) => {
  const updatedState = {
    showUpdateModal: true
  }
  return updateObject(state, updatedState)
}

const closeUpdateModal = (state, action) => {
  const updatedState = {
    showUpdateModal: false
  }
  return updateObject(state, updatedState)
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PEDAL:
      return addPedal(state, action)
    case actionTypes.REMOVE_PEDAL:
      return removePedal(state, action)
    case actionTypes.REMOVE_ALL_PEDALS:
      return removeAllPedals(state, action)
    case actionTypes.SHOW_BUTTONS:
      return showButtons(state, action)
    case actionTypes.HIDE_BUTTONS:
      return hideButtons(state, action)
    case actionTypes.ROTATE_PEDAL:
      return rotatePedal(state, action)
    case actionTypes.CURRENT_DRAGGED_ID:
      return currentDraggedId(state, action)
    case actionTypes.ON_CONTROLLED_DRAG:
      return onControlledDrag(state, action)
    case actionTypes.SAVE_BUILD:
      return setSaveBuild(state, action)
    case actionTypes.SET_PEDALS:
      return setPedals(state, action)
    case actionTypes.CLOSE_SAVE_MODAL:
      return closeSaveModal(state, action)
    case actionTypes.SET_BUILD_HISTORY:
      return setBuildHistory(state, action)
    case actionTypes.INIT_CURRENT_PEDALBOARD:
      return setCurrentPedalboard(state, action)
    case actionTypes.SET_YOUTUBE_RESULTS:
      return setYoutubeResults(state, action)
    case actionTypes.SET_DELETE_BUILD:
      return setDeleteBuild(state, action)
    case actionTypes.SET_LOAD_BUILD:
      return setLoadBuild(state, action)
    case actionTypes.OPEN_HISTORY_MODAL:
      return openHistoryModal(state, action)
    case actionTypes.CLOSE_HISTORY_MODAL:
      return closeHistoryModal(state, action)
    case actionTypes.SET_UPDATE_BUILD:
      return setUpdateBuild(state, action)
    case actionTypes.OPEN_UPDATE_MODAL:
      return openUpdateModal(state, action)
    case actionTypes.CLOSE_UPDATE_MODAL:
      return closeUpdateModal(state, action)
    default:
      return state
  }
}

export default reducer
