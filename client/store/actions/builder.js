import axios from 'axios'
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


// export const initPedals = () => {
//   console.log('hoi')
//   return dispatch => {
//     console.log('hi')
//     return fetch('/api/pedals', {
//       method: 'GET'
//     })
//       .then(res => res.json())
//       .then(data => {
//         // this.setState({ pedals: data })
//         dispatch(setPedals(data))
//       })
//       .catch(err => console.log(err))
//   }
// }
export const setPedals = pedals => ({
  type: actionTypes.SET_PEDALS,
  pedals
})

export const initPedals = () => {
  console.log('hi')
  return dispatch => {
    axios
      .get('http://localhost:3001/api/pedals')
      .then(response => {
        dispatch(setPedals(response.data))
      })
      .catch(error => {
        console.log(error)
      })
  }
}

// export const setBuildHistory = buildHistory => ({
//   type: actionTypes.SET_BUILD_HISTORY,
//   buildHistory
// })
//
// export const initBuildHistory = () => {
//   return dispatch => {
//     axios
//       .get('/api/userConfigs')
//       .then(response => {
//         console.log(response)
//         dispatch(setBuildHistory(response.data))
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   }
// }

// export const initBuildHistory = () => {
//   // console.log('hi')
//   return dispatch => {
//     // console.log('hi2')
//     return fetch('/api/userConfigs', {
//       method: 'GET'
//     })
//       .then(res => res.json())
//       .then(data => {
//         // console.log('hi')
//         // this.setState({ buildHistory: data })
//         dispatch(setBuildHistory(data))
//       })
//       .catch(err => console.log(err))
//   }
// }
