import * as actionTypes from './actionTypes'

export const addPedal = id => ({
  type: actionTypes.ADD_PEDAL,
  id
})

export const removePedal = id => ({
  type: actionTypes.REMOVE_PEDAL,
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
