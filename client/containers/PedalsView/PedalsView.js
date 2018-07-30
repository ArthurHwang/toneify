import React, { Component, Fragment } from 'react'
import Pedals from '../../components/Pedals/Pedals'
import PedalsModal from '../../components/Modal/PedalsModal/PedalsModal'

class PedalsView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pedals: [],
      currentPedal: null,
      modalOpen: false
    }
  }

  componentDidMount() {
    fetch('/api/pedals', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ pedals: data })
      })
      .catch(err => console.log(err))
  }

  handlePedalClick = (id, event) => {
    const foundPedal = this.state.pedals.find((elem, index) => {
      if (elem.id === id) {
        return elem
      }
    })
    this.setState({ modalOpen: true, currentPedal: foundPedal })
  }

  handleModalClick = event => {
    this.setState({ modalOpen: false })
  }

  handleBuildClick = event => {
    this.props.history.push({
      pathname: '/builder',
      state: {
        currentPedalboard: this.state.currentPedalboard
      }
    })
  }

  render() {
    const { pedals, currentPedal, modalOpen } = this.state
    return (
      <Fragment>
        <PedalsModal
          handleClick={this.handleModalClick}
          pedalData={currentPedal}
          modalOpen={modalOpen}
          handleBuildClick={this.handleBuildClick}
        />
        <Pedals handleClick={this.handlePedalClick} pedalData={pedals} />
      </Fragment>
    )
  }
}

export default PedalsView
