import * as actionTypes from './actionTypes'

// export const removePedal = id => {
//   type: actionTypes.REMOVE_PEDAL,
//   pedalID: id
// }
//
// export const removePedal = id => {
//   type: actionTypes.REMOVE_PEDAL,
//   id: id
// }
export const addPedal = id => ({
  type: actionTypes.ADD_PEDAL,
  id
})

export const setPedals = pedals => ({
  type: actionTypes.SET_PEDALS,
  pedals
})

export const initPedals = () => {
  return dispatch => {
    fetch('/api/pedals', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        dispatch(setPedals(data))
      })
      .catch(err => console.log(err))
  }
}

export const setBuildHistory = buildHistory => ({
  type: actionTypes.SET_BUILD_HISTORY,
  buildHistory
})

export const initBuildHistory = () => {
  return dispatch => {
    fetch('/api/userConfigs', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        dispatch(setBuildHistory(data))
      })
      .catch(err => console.log(err))
  }
}
