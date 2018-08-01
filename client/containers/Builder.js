import React, { Component, Fragment } from 'react'
import PedalboardBuilderDisplay from '../components/Builder/PedalboardBuilderDisplay'
import WarningMessage from '../components/Builder/WarningMessage'
import BuilderModal from '../components/Modal/BuilderModal'
import BuilderPedals from '../components/Builder/BuilderPedals'
import BuilderAddPedalButton from '../components/Builder/BuilderAddPedalButton'
import DeleteAllPedalsButton from '../components/Builder/BuilderDeleteAllPedalsButton'
import BuilderSaveButton from '../components/Builder/BuilderSaveButton'
import HistoryModal from '../components/Modal/HistoryModal'
import ShowHistoryButton from '../components/Builder/ShowHistoryButton'

class Builder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPedalboard: null,
      pedals: [],
      pedalsOnBoard: [],
      showModal: false,
      buildHistory: null,
      showHistoryModal: false
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
    if (!this.props.location.state) {
      this.setState({ currentPedalboard: null })
    }
    else {
      this.setState({
        currentPedalboard: this.props.location.state.currentPedalboard
      })
    }

    fetch('/api/userConfigs', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ buildHistory: data })
      })
      .catch(err => console.log(err))
  }

  addPedal = id => {
    const findPedal = this.state.pedals.find((elem, index) => {
      if (elem.id === id) {
        return elem
      }
    })
    const updatePedalsOnBoard = [...this.state.pedalsOnBoard, findPedal]
    const withRotation = updatePedalsOnBoard.map((elem, index) => ({
      ...elem,
      rotation: elem.rotation || 0,
      showButtons: elem.showButtons || false
    }))
    this.setState({ showModal: false, pedalsOnBoard: withRotation })
  }

  deletePedal = id => {
    const copy = [...this.state.pedalsOnBoard]
    copy.find((elem, index, array) => {
      if (elem.id === id) {
        array.splice(index, 1)
      }
    })
    this.setState({ pedalsOnBoard: copy })
  }

  deleteAllPedals = () => {
    this.setState({ pedalsOnBoard: [] })
  }

  openModalHandler = () => {
    this.setState({ showModal: true })
  }

  closeModalHandler = () => {
    this.setState({ showModal: false })
  }

  openHistoryModalHandler = () => {
    this.setState({ showHistoryModal: true })
  }

  closeHistoryModalHandler = () => {
    this.setState({ showHistoryModal: false })
  }

  buttonShow = id => {
    const copy = [...this.state.pedalsOnBoard]
    copy.forEach(elem => {
      if (elem.id === id) {
        elem.showButtons = true
      }
    })
    this.setState({ pedalsOnBoard: copy })
  }

  buttonHide = id => {
    const copy = [...this.state.pedalsOnBoard]
    copy.forEach(elem => {
      if (elem.id === id) {
        elem.showButtons = false
      }
    })
    this.setState({ pedalsOnBoard: copy })
  }

  rotatePedal = id => {
    const copy = [...this.state.pedalsOnBoard]
    copy.forEach(elem => {
      if (elem.id === id) {
        elem.rotation >= 360 ? (elem.rotation = 0) : (elem.rotation += 90)
      }
    })
    this.setState({ pedalsOnBoard: copy })
  }

  saveBuild = () => {
    fetch('/api/userConfigs', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pedalBoard: this.state.currentPedalboard,
        pedals: this.state.pedalsOnBoard
      })
    })
      .then(res => res.json())
      .then(data => {
        fetch('/api/userConfigs', {
          method: 'GET'
        })
          .then(res => res.json())
          .then(payload => {
            this.setState({ buildHistory: payload })
          })
      })
      .catch(error => console.log(error))
  }

  render() {
    const { buildHistory, showHistoryModal, pedals, showModal, currentPedalboard, pedalsOnBoard } = this.state
    return (
      <Fragment>
        <BuilderAddPedalButton showButton={currentPedalboard} showModal={this.openModalHandler} />
        <DeleteAllPedalsButton showButton={this.state.pedalsOnBoard} deleteAllPedals={this.deleteAllPedals} />
        <BuilderSaveButton saveBuild={this.saveBuild} showButton={this.state.pedalsOnBoard} />
        <ShowHistoryButton showModal={this.openHistoryModalHandler} />
        <BuilderModal
          closeModalHandler={this.closeModalHandler}
          showModal={showModal}
          pedalData={pedals}
          handleClick={this.addPedal}
        />
        {currentPedalboard ? <PedalboardBuilderDisplay currentPedalboard={currentPedalboard} /> : <WarningMessage />}
        <BuilderPedals
          deletePedal={this.deletePedal}
          mouseLeave={this.buttonHide}
          mouseOver={this.buttonShow}
          rotate={this.rotatePedal}
          pedals={pedalsOnBoard}
        />
        <HistoryModal
          showModal={showHistoryModal}
          closeModalHandler={this.closeHistoryModalHandler}
          buildHistory={buildHistory}
        />
      </Fragment>
    )
  }
}
export default Builder
