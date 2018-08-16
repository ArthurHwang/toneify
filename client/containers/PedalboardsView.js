import React, { Component, Fragment } from 'react'
import PedalBoards from '../components/Pedalboards/Pedalboards'
import PedalboardsModal from '../components/Modal/PedalboardsModal'

class PedalboardsView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pedalboards: [],
      currentPedalboard: {},
      modalOpen: false
    }
  }

  componentDidMount() {
    fetch('/api/pedalboards', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ pedalboards: data })
      })
      .catch(err => console.log(err))
  }

  handlePedalBoardClick = (id, event) => {
    const foundPedalBoard = this.state.pedalboards.find((elem, index) => {
      if (elem.id === id) {
        return elem
      }
    })
    this.setState({ modalOpen: true, currentPedalboard: foundPedalBoard })
  }

  handleModalClick = event => {
    this.setState({ modalOpen: false })
  }

  handleBuildClick = event => {
    sessionStorage.setItem('data', JSON.stringify(this.state.currentPedalboard))
    this.props.history.push({
      pathname: '/builder'
    })
  }

  render() {
    const { modalOpen, pedalboards, currentPedalboard } = this.state
    return (
      <Fragment>
        <PedalboardsModal
          handleClick={this.handleModalClick}
          pedalData={currentPedalboard}
          modalOpen={modalOpen}
          handleBuildClick={this.handleBuildClick}
        />
        <PedalBoards handleClick={this.handlePedalBoardClick} pedalData={pedalboards} />
      </Fragment>
    )
  }
}

export default PedalboardsView
