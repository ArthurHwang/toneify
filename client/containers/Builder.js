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
import SaveCompleteModal from '../components/Modal/SaveCompleteModal'
import UpdateBuildButton from '../components/Builder/UpdateBuildButton'

class Builder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPedalboard: null,
      pedals: [],
      pedalsOnBoard: [],
      showModal: false,
      buildHistory: [],
      showHistoryModal: false,
      showSaveCompleteModal: false,
      currentDraggedID: '',
      isEditing: false,
      buildToBeUpdated: false,
      currentBuildID: null
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

  onControlledDrag = (e, position) => {
    const { x, y } = position
    const copy = [...this.state.pedalsOnBoard]
    copy.forEach(elem => {
      if (elem.id === this.state.currentDraggedID) {
        elem.posX = x
        elem.posY = y
      }
    })
    if (this.state.isEditing) {
      this.setState({ buildToBeUpdated: true })
    }
    this.setState({ isEditing: true, pedalsOnBoard: copy })
  }

  loadSavedBuild = id => {
    fetch('/api/userConfigs/' + id, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          currentPedalboard: data.pedalBoard,
          pedalsOnBoard: data.pedals,
          showHistoryModal: false,
          isEditing: true,
          currentBuildID: id
        })
      })
      .catch(err => console.log(err))
  }

  currentDraggedID = (e, id) => {
    this.setState({ currentDraggedID: id })
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
      showButtons: elem.showButtons || false,
      posX: null,
      posY: null
    }))
    this.setState({ showModal: false, pedalsOnBoard: withRotation })
  }

  deletePedal = id => {
    const copy = [...this.state.pedalsOnBoard]
    copy.forEach((elem, index, array) => {
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

  closeSaveModal = () => {
    this.setState({ showSaveCompleteModal: false })
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
        const appendToHistory = [...this.state.buildHistory, data]
        this.setState({
          buildHistory: appendToHistory,
          showSaveCompleteModal: true
        })
      })
      .catch(err => console.log(err))
  }

  updateBuild = () => {
    fetch('/api/userConfigs/' + this.state.currentBuildID, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pedalBoard: this.state.currentPedalboard,
        pedals: this.state.pedalsOnBoard
      })
    })
      .then(res => res.json())
      .then(data => {
        updatedData = this.state.buildHistory.map((elem, index, array) => {
          if (elem.id === this.state.currentBuildId) {
            elem = data
            return elem
          }
          else {
            return elem
          }
        })

        this.setStaet({ buildHistory: updatedData })
        // .then(res => res.json())
      })
      .catch(err => console.log(err))
  }

  deleteBuild = id => {
    fetch('/api/userConfigs/' + id, {
      method: 'DELETE'
    })
      .then(() => {
        const copy = [...this.state.buildHistory]
        copy.forEach((elem, index, array) => {
          if (elem.id === id) {
            array.splice(index, 1)
          }
        })
        this.setState({ buildHistory: copy })
      })
      .catch(error => console.log(error))
  }

  click = () => {
    console.log(this.state.buildHistory.length)
  }

  render() {
    const { buildHistory, showHistoryModal, pedals, showModal, currentPedalboard, pedalsOnBoard } = this.state
    return (
      <Fragment>
        <BuilderAddPedalButton showButton={currentPedalboard} showModal={this.openModalHandler} />
        <DeleteAllPedalsButton showButton={this.state.pedalsOnBoard} deleteAllPedals={this.deleteAllPedals} />
        <BuilderSaveButton saveBuild={this.saveBuild} showButton={this.state.pedalsOnBoard} />
        <ShowHistoryButton showButton={this.state.buildHistory} showModal={this.openHistoryModalHandler} />
        <UpdateBuildButton
          updateBuild={this.updateBuild}
          pedalsOnScreen={this.state.pedalsOnBoard}
          isEditing={this.state.isEditing}
          showButton={this.state.buildToBeUpdated}
        />
        <BuilderModal
          closeModalHandler={this.closeModalHandler}
          showModal={showModal}
          pedalData={pedals}
          handleClick={this.addPedal}
        />
        {currentPedalboard ? <PedalboardBuilderDisplay currentPedalboard={currentPedalboard} /> : <WarningMessage />}
        <BuilderPedals
          getId={this.currentDraggedID}
          onDrag={this.onControlledDrag}
          deletePedal={this.deletePedal}
          mouseLeave={this.buttonHide}
          mouseOver={this.buttonShow}
          rotate={this.rotatePedal}
          pedals={pedalsOnBoard}
        />
        <HistoryModal
          loadSavedBuild={this.loadSavedBuild}
          showModal={showHistoryModal}
          closeModalHandler={this.closeHistoryModalHandler}
          buildHistory={buildHistory}
          deleteBuild={this.deleteBuild}
        />
        <SaveCompleteModal closeModal={this.closeSaveModal} showModal={this.state.showSaveCompleteModal} />
      </Fragment>
    )
  }
}
export default Builder
