import React, { Component, Fragment } from 'react'
import PedalBoards from '../../components/PedalBoards/PedalBoards'
import Modal from '../../components/Modal/Modal'

class Pedalboards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pedalboards: [],
      currentPedalboard: null,
      modalOpen: false
    }
  }

  componentDidMount() {
    fetch('/pedalboards', {
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
    this.props.history.push({
      pathname: '/builder',
      state: {
        currentPedalboard: this.state.currentPedalboard
      }
    })
  }

  render() {
    const { modalOpen, pedalboards, currentPedalboard } = this.state
    const modal = this.state.modalOpen ? (
      <Modal
        handleClick={this.handleModalClick}
        pedalData={currentPedalboard}
        modalOpen={modalOpen}
        handleBuildClick={this.handleBuildClick}
      />
    ) : null
    return (
      <Fragment>
        {modal}
        <PedalBoards
          handleClick={this.handlePedalBoardClick}
          pedalData={pedalboards}
        />
      </Fragment>
    )
  }
}

export default Pedalboards
