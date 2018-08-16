import * as actionTypes from './actionTypes'

export const addPedal = id => ({
  type: actionTypes.ADD_PEDAL,
  id
})

export const removePedal = id => ({
  type: actionTypes.REMOVE_PEDAL,
  id
})

export const removeAllPedals = () => ({
  type: actionTypes.REMOVE_ALL_PEDALS
})

export const showButtons = id => ({
  type: actionTypes.SHOW_BUTTONS,
  id
})

export const hideButtons = id => ({
  type: actionTypes.HIDE_BUTTONS,
  id
})

export const rotatePedal = id => ({
  type: actionTypes.ROTATE_PEDAL,
  id
})

export const onControlledDrag = (event, position) => ({
  type: actionTypes.ON_CONTROLLED_DRAG,
  event,
  position
})

export const currentDraggedId = id => ({
  type: actionTypes.CURRENT_DRAGGED_ID,
  id
})

export const setPedals = pedals => ({
  type: actionTypes.SET_PEDALS,
  pedals
})

export const initPedals = () => dispatch => {
  fetch('/api/pedals', {
    method: 'GET'
  })
    .then(res => res.json())
    .then(data => {
      dispatch(setPedals(data))
    })
    .catch(err => console.log(err))
}

export const setBuildHistory = buildHistory => ({
  type: actionTypes.SET_BUILD_HISTORY,
  buildHistory
})

export const initBuildHistory = () => dispatch => {
  fetch('/api/userConfigs', {
    method: 'GET'
  })
    .then(res => res.json())
    .then(data => {
      dispatch(setBuildHistory(data))
    })
    .catch(err => console.log(err))
}

export const setSaveBuild = build => ({
  type: actionTypes.SAVE_BUILD,
  build
})

export const saveBuild = (currentPedalboard, pedalsOnBoard) => (dispatch, getState) => {
  const { currentPedalboard, pedalsOnBoard } = getState().builder
  fetch('/api/userConfigs', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      pedalBoard: currentPedalboard,
      pedals: pedalsOnBoard
    })
  })
    .then(res => res.json())
    .then(data => {
      dispatch(setSaveBuild(data))
    })
    .catch(err => console.log(err))
}

export const doubleClickHandler = (brand, model) => ({
  type: actionTypes.DOUBLE_CLICK_HANDLER,
  brand,
  model,
})

export const initCurrentPedalboard = (pedalboard) => ({
  type: actionTypes.INIT_CURRENT_PEDALBOARD,
  pedalboard
})

export const closeSaveModal = () => ({
  type: actionTypes.CLOSE_SAVE_MODAL
})
