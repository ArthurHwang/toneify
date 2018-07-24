import React, { Component, Fragment } from 'react'
import Nav from './components/Nav/Nav'
import PedalBoards from './components/PedalBoards/PedalBoards'
import Modal from './components/Modal/Modal'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pedalboards: [],
      currentPedalboard: null,
      modalOpen: false
    }
    this.handlePedalBoardClick = this.handlePedalBoardClick.bind(this)
    this.handleModalClick = this.handleModalClick.bind(this)
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

  handlePedalBoardClick(id, event) {
    const foundPedalBoard = this.state.pedalboards.find((elem, index) => {
      if (index === id) {
        return elem
      }
    })

    this.setState({ modalOpen: true, currentPedalboard: foundPedalBoard })
  }

  handleModalClick(event) {
    this.setState({ modalOpen: false })
  }

  render() {
    const { modalOpen, pedalboards, currentPedalboard } = this.state
    const modal = this.state.modalOpen ? (
      <Modal
        handleClick={this.handleModalClick}
        pedalData={currentPedalboard}
        modalOpen={modalOpen}
      />
    ) : null
    return (
      <Fragment>
        {modal}
        <Nav />
        <PedalBoards
          handleClick={this.handlePedalBoardClick}
          pedalData={pedalboards}
        />
      </Fragment>
    )
  }
}

export default App
