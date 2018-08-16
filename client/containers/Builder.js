import React, { Component, Fragment } from 'react'
// import YoutubeSearch from 'youtube-search'
import { connect } from 'react-redux'
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
import YoutubePedalsOutput from '../components/Builder/YoutubePedalsOutput'
import BuilderHint from '../components/Builder/BuilderHint'
import * as actions from '../store/actions/index'

require('dotenv/config')

class Builder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // youtubePedalResults: JSON.parse(sessionStorage.getItem('youtube')) || [],
      showModal: false,
      showHistoryModal: false,
      // currentBuildID: null,
      showUpdateModal: false
    }
  }

  componentDidMount() {
    this.props.initCurrentPedalboard()
    this.props.initBuildHistory()
    this.props.initPedals()
  }

  componentWillUnmount() {
    if (this.props.pedalsOnBoard.length) {
      sessionStorage.setItem('pedals', JSON.stringify(this.props.pedalsOnBoard))
    }
    if (this.props.youtubePedalResults.length) {
      sessionStorage.setItem('youtube', JSON.stringify(this.props.youtubePedalResults))
    }
  }

  // doubleClickHandler = (brand, model) => {
  //   this.setState({ youtubePedalResults: [] })
  //   const opts = {
  //     maxResults: 6,
  //     key: 'AIzaSyBDkUSbJPfuFC5fNWKYfp-sx-KOJSLh9bs'
  //   }
  //   const query = brand + ' ' + model + ' sound demo'
  //
  //   YoutubeSearch(query, opts, (err, results) => {
  //     if (err) console.log(err)
  //     this.setState({ youtubePedalResults: results })
  //   })
  // }

  // loadSavedBuild = id => {
  //   fetch('/api/userConfigs/' + id, {
  //     method: 'GET'
  //   })
  //     .then(res => {
  //       this.setState({ pedalsOnBoard: [] })
  //       return res.json()
  //     })
  //     .then(data => {
  //       this.setState({
  //         currentPedalboard: data.pedalBoard,
  //         pedalsOnBoard: data.pedals,
  //         showHistoryModal: false,
  //         isEditing: true,
  //         currentBuildID: id,
  //         youtubePedalResults: []
  //       })
  //     })
  //     .catch(err => console.log(err))
  // }
  //
  saveBuild = () => {
    fetch('/api/userConfigs', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pedalBoard: this.state.currentPedalboard,
        pedals: this.props.pedalsOnBoard
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
  //
  // updateBuild = () => {
  //   fetch('/api/userConfigs/' + this.state.currentBuildID, {
  //     method: 'PUT',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       pedalBoard: this.state.currentPedalboard,
  //       pedals: this.props.pedalsOnBoard
  //     })
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       const updatedBuildHistory = this.state.buildHistory.map(elem => {
  //         if (elem.id === this.state.currentBuildID) {
  //           elem = data
  //           return elem
  //         }
  //         else {
  //           return elem
  //         }
  //       })
  //       this.setState({
  //         isEditing: false,
  //         buildToBeUpdated: false,
  //         buildHistory: updatedBuildHistory,
  //         showUpdateModal: true
  //       })
  //     })
  //     .catch(err => console.log(err))
  // }
  //
  // deleteBuild = id => {
  //   fetch('/api/userConfigs/' + id, {
  //     method: 'DELETE'
  //   })
  //     .then(() => {
  //       const buildHistory = [...this.state.buildHistory]
  //       const buildIndex = buildHistory.findIndex(elem => elem.id === id)
  //       buildHistory.splice(buildIndex, 1)
  //       this.setState({ buildHistory })
  //     })
  //     .catch(error => console.log(error))
  // }

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

  closeUpdateModal = () => {
    this.setState({ showUpdateModal: false })
  }

  render() {
    const { youtubePedalResults, showHistoryModal, showModal, currentPedalboard } = this.state
    return (
      <Fragment>
        <BuilderHint currentPedalboard={this.props.currentPedalboard} showHint={this.props.showHint} />
        <BuilderAddPedalButton showButton={this.props.currentPedalboard} showModal={this.openModalHandler} />
        <DeleteAllPedalsButton showButton={this.props.pedalsOnBoard} deleteAllPedals={this.props.removeAllPedals} />
        <BuilderSaveButton saveBuild={this.props.saveBuild} showButton={this.props.pedalsOnBoard} />
        <ShowHistoryButton showButton={this.props.buildHistory} showModal={this.openHistoryModalHandler} />
        <UpdateBuildButton
          updateBuild={this.updateBuild}
          pedalsOnScreen={this.props.pedalsOnBoard}
          isEditing={this.props.isEditing}
          showButton={this.props.buildToBeUpdated}
        />
        <BuilderModal
          closeModalHandler={this.closeModalHandler}
          showModal={showModal}
          pedalData={this.props.pedals}
          handleClick={this.props.addPedal}
        />
        {this.props.currentPedalboard ? <PedalboardBuilderDisplay currentPedalboard={this.props.currentPedalboard} /> : <WarningMessage />}
        <BuilderPedals
          doubleClick={this.props.doubleClickHandler}
          getId={this.props.currentDraggedId}
          onDrag={this.props.onControlledDrag}
          deletePedal={this.props.removePedal}
          mouseLeave={this.props.hideButtons}
          mouseOver={this.props.showButtons}
          rotate={this.props.rotatePedal}
          pedals={this.props.pedalsOnBoard}
        />
        <YoutubePedalsOutput searchResults={this.props.youtubePedalResults} pedalsOnBoard={this.props.pedalsOnBoard} />
        <HistoryModal
          loadSavedBuild={this.loadSavedBuild}
          showModal={showHistoryModal}
          closeModalHandler={this.closeHistoryModalHandler}
          buildHistory={this.props.buildHistory}
          deleteBuild={this.deleteBuild}
        />
        <SaveCompleteModal closeModal={this.props.closeSaveModal} showModal={this.props.showSaveCompleteModal} />
        <UpdateCompleteModal closeModal={this.closeUpdateModal} showModal={this.state.showUpdateModal} />
      </Fragment>
    )
  }
}

const mapStateToProps = ({ builder }) => ({
  pedals: builder.pedals,
  buildHistory: builder.buildHistory,
  pedalsOnBoard: builder.pedalsOnBoard,
  currentDraggedId: builder.currentDraggedId,
  showHint: builder.showHint,
  isEditing: builder.isEditing,
  buildToBeUpdated: builder.buildToBeUpdated,
  currentPedalboard: builder.currentPedalboard,
  showSaveCompleteModal: builder.showSaveCompleteModal,
  youtubePedalResults: builder.youtubePedalResults
})

const mapDispatchToProps = dispatch => ({
  doubleClickHandler: (brand, model) => dispatch(actions.doubleClickHandler(brand, model)),
  closeSaveModal: () => dispatch(actions.closeSaveModal()),
  currentDraggedId: id => dispatch(actions.currentDraggedId(id)),
  onControlledDrag: (event, position) => dispatch(actions.onControlledDrag(event, position)),
  showButtons: id => dispatch(actions.showButtons(id)),
  hideButtons: id => dispatch(actions.hideButtons(id)),
  rotatePedal: id => dispatch(actions.rotatePedal(id)),
  addPedal: id => dispatch(actions.addPedal(id)),
  removePedal: id => dispatch(actions.removePedal(id)),
  removeAllPedals: () => dispatch(actions.removeAllPedals()),
  saveBuild: () => dispatch(actions.saveBuild()),
  initCurrentPedalboard: pedalboard => dispatch(actions.initCurrentPedalboard(JSON.parse(sessionStorage.getItem('data')))),
  initPedals: () => dispatch(actions.initPedals()),
  initBuildHistory: () => dispatch(actions.initBuildHistory())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Builder)
