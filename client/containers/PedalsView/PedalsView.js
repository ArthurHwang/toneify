import React, { Component, Fragment } from 'react'
import Pedals from '../../components/Pedals/Pedals'
// import Modal from '../../components/Modal/Modal'

class pedals extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pedals: []
    }
  }

  componentDidMount() {
    fetch('/pedals/', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ pedals: data })
      })
      .catch(err => console.log(err))
  }

  // handlePedalClick = (id, event) => {
  //   const foundPedal= this.state.pedalboards.find((elem, index) => {
  //     if (elem.id === id) {
  //       return elem
  //     }
  //   })
  //   this.setState({ modalOpen: true, currentPedalboard: foundPedalBoard })
  // }

  // handleModalClick = event => {
  //   this.setState({ modalOpen: false })
  // }

  // handleBuildClick = event => {
  //   this.props.history.push({
  //     pathname: '/builder',
  //     state: {
  //       currentPedalboard: this.state.currentPedalboard
  //     }
  //   })
  // }

  render() {
    const { pedals } = this.state
    return (
      <Fragment>
        <Pedals pedalData={pedals} />
      </Fragment>
    )
  }
}

export default pedals
