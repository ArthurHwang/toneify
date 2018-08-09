import React, { Component, Fragment } from 'react'
import YoutubeSearch from 'youtube-search'
import YoutubeFrame from 'react-youtube'
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
import UpdateCompleteModal from '../components/Modal/UpdateCompleteModal'

require('dotenv/config')

class Builder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPedalboard: null,
      pedals: [],
      pedalsOnBoard: [],
      buildHistory: [],
      showModal: false,
      showHistoryModal: false,
      showSaveCompleteModal: false,
      currentDraggedID: '',
      isEditing: false,
      buildToBeUpdated: false,
      currentBuildID: null,
      showUpdateModal: false,
      youtubePedalResults: []
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
    const pedalsOnBoard = [...this.state.pedalsOnBoard]
    pedalsOnBoard.forEach(elem => {
      if (elem.id === this.state.currentDraggedID) {
        elem.posX = x
        elem.posY = y
      }
    })
    if (this.state.isEditing) {
      this.setState({ isEditing: true, buildToBeUpdated: true })
    }
    this.setState({ pedalsOnBoard })
  }

  currentDraggedID = id => {
    this.setState({ currentDraggedID: id })
  }

  loadSavedBuild = id => {
    fetch('/api/userConfigs/' + id, {
      method: 'GET'
    })
      .then(res => {
        this.setState({ pedalsOnBoard: [] })
        return res.json()
      })
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

  addPedal = id => {
    const { pedals, pedalsOnBoard } = this.state
    const findPedal = pedals.find((elem, index) => {
      if (elem.id === id) {
        return elem
      }
    })
    const updatePedalsOnBoard = [...pedalsOnBoard, findPedal]
    const withRotation = updatePedalsOnBoard.map((elem, index) => ({
      ...elem,
      rotation: elem.rotation || 0,
      showButtons: elem.showButtons || false,
      posX: elem.posX || null,
      posY: elem.posY || null
    }))

    if (this.state.isEditing) {
      this.setState({ buildToBeUpdated: true })
    }
    this.setState({ showModal: false, pedalsOnBoard: withRotation })
  }

  deletePedal = id => {
    const { pedalsOnBoard } = this.state
    const pedalsToDelete = [...pedalsOnBoard]
    const buildIndex = pedalsToDelete.findIndex(elem => elem.id === id)
    pedalsToDelete.splice(buildIndex, 1)
    this.setState({ pedalsOnBoard: pedalsToDelete })
  }

  deleteAllPedals = () => {
    this.setState({ isEditing: false, pedalsOnBoard: [], buildToBeUpdated: false })
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

  closeUpdateModal = () => {
    this.setState({ showUpdateModal: false })
  }

  buttonShow = id => {
    const pedalsOnBoard = [...this.state.pedalsOnBoard]
    pedalsOnBoard.find(elem => {
      if (elem.id === id) {
        elem.showButtons = true
      }
    })
    this.setState({ pedalsOnBoard })
  }

  buttonHide = id => {
    const pedalsOnBoard = [...this.state.pedalsOnBoard]
    pedalsOnBoard.find(elem => {
      if (elem.id === id) {
        elem.showButtons = false
      }
    })
    this.setState({ pedalsOnBoard })
  }

  rotatePedal = id => {
    const pedalsOnBoard = [...this.state.pedalsOnBoard]
    pedalsOnBoard.find(elem => {
      if (elem.id === id) {
        elem.rotation >= 360 ? (elem.rotation = 0) : (elem.rotation += 90)
      }
    })
    this.setState({ pedalsOnBoard })
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
        const updatedBuildHistory = this.state.buildHistory.map(elem => {
          if (elem.id === this.state.currentBuildID) {
            elem = data
            return elem
          }
          else {
            return elem
          }
        })
        this.setState({
          isEditing: false,
          buildToBeUpdated: false,
          buildHistory: updatedBuildHistory,
          showUpdateModal: true
        })
      })
      .catch(err => console.log(err))
  }

  deleteBuild = id => {
    fetch('/api/userConfigs/' + id, {
      method: 'DELETE'
    })
      .then(() => {
        const buildHistory = [...this.state.buildHistory]
        const buildIndex = buildHistory.findIndex(elem => elem.id === id)
        buildHistory.splice(buildIndex, 1)
        this.setState({ buildHistory })
      })
      .catch(error => console.log(error))
  }

  doubleClickHandler = (brand, model) => {
    const opts = {
      maxResults: 5,
      key: 'AIzaSyBDkUSbJPfuFC5fNWKYfp-sx-KOJSLh9bs'
    }
    const query = brand + ' ' + model

    YoutubeSearch(query, opts, (err, results) => {
      if (err) {
        return console.log(err)
      }
      console.dir(results)
      this.setState({youtubePedalResults: results}, console.log(this.state.youtubePedalResults))
    })
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
          doubleClick={this.doubleClickHandler}
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
        <UpdateCompleteModal closeModal={this.closeUpdateModal} showModal={this.state.showUpdateModal} />
      </Fragment>
    )
  }
}
export default Builder
