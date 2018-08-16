import React, { Component, Fragment } from 'react'
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
      showModal: false,
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
    const { showHistoryModal, showModal } = this.state

    return (
      <Fragment>
        <BuilderHint currentPedalboard={this.props.currentPedalboard} showHint={this.props.showHint} />
        <BuilderAddPedalButton showButton={this.props.currentPedalboard} showModal={this.openModalHandler} />
        <DeleteAllPedalsButton showButton={this.props.pedalsOnBoard} deleteAllPedals={this.props.removeAllPedals} />
        <BuilderSaveButton saveBuild={this.props.saveBuild} showButton={this.props.pedalsOnBoard} />
        <ShowHistoryButton showButton={this.props.buildHistory} showModal={this.props.openHistoryModal} />
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
          loadSavedBuild={this.props.loadBuild}
          showModal={this.props.showHistoryModal}
          closeModalHandler={this.props.closeHistoryModal}
          buildHistory={this.props.buildHistory}
          deleteBuild={this.props.deleteBuild}
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
  youtubePedalResults: builder.youtubePedalResults,
  showHistoryModal: builder.showHistoryModal
})

const mapDispatchToProps = dispatch => ({
  openHistoryModal: () => dispatch(actions.openHistoryModal()),
  closeHistoryModal: () => dispatch(actions.closeHistoryModal()),
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
  deleteBuild: id => dispatch(actions.deleteBuild(id)),
  saveBuild: () => dispatch(actions.saveBuild()),
  loadBuild: (id) => dispatch(actions.loadBuild(id)),
  updateBuild: () => dispatch(actions.updateBuild()),
  initCurrentPedalboard: pedalboard => dispatch(actions.initCurrentPedalboard(JSON.parse(sessionStorage.getItem('data')))),
  initPedals: () => dispatch(actions.initPedals()),
  initBuildHistory: () => dispatch(actions.initBuildHistory())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Builder)
