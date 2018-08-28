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
import * as actions from '../store/actions/index'

require('dotenv/config')

class Builder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  componentDidMount() {
    this.props.initBuildHistory()
    this.props.initPedals()
  }

  openModalHandler = () => {
    this.setState({ showModal: true })
  }

  closeModalHandler = () => {
    this.setState({ showModal: false })
  }

  render() {
    const { showModal } = this.state
    const {
      closeSaveModal,
      showSaveCompleteModal,
      closeUpdateModal,
      showUpdateModal,
      loadBuild,
      showHistoryModal,
      closeHistoryModal,
      deleteBuild,
      youtubePedalResults,
      currentPedalboard,
      pedalsOnBoard,
      removeAllPedals,
      saveBuild,
      buildHistory,
      openHistoryModal,
      updateBuild,
      isEditing,
      pedals,
      addPedal,
      doubleClickHandler,
      currentDraggedId,
      onControlledDrag,
      removePedal,
      hideButtons,
      showButtons,
      rotatePedal,
      buildToBeUpdated,
      totalPrice
    } = this.props
    return (
      <Fragment>
        <BuilderModal
          closeModalHandler={this.closeModalHandler}
          showModal={showModal}
          pedalData={pedals}
          handleClick={addPedal}
        />
        {currentPedalboard ? (
          <PedalboardBuilderDisplay
            pedalsOnBoard={pedalsOnBoard}
            totalPrice={totalPrice}
            currentPedalboard={currentPedalboard}
          />
        ) : (
          <WarningMessage />
        )}
        <div className="builder-actions">
          <BuilderAddPedalButton showButton={currentPedalboard} showModal={this.openModalHandler} />
          <DeleteAllPedalsButton showButton={pedalsOnBoard} deleteAllPedals={removeAllPedals} />
          <BuilderSaveButton saveBuild={saveBuild} showButton={pedalsOnBoard} />
          <ShowHistoryButton showButton={buildHistory} showModal={openHistoryModal} />
          <UpdateBuildButton
            updateBuild={updateBuild}
            pedalsOnScreen={pedalsOnBoard}
            isEditing={isEditing}
            showButton={buildToBeUpdated}
          />
        </div>
        <BuilderPedals
          doubleClick={doubleClickHandler}
          getId={currentDraggedId}
          onDrag={onControlledDrag}
          deletePedal={removePedal}
          mouseLeave={hideButtons}
          mouseOver={showButtons}
          rotate={rotatePedal}
          pedals={pedalsOnBoard}
        />
        <YoutubePedalsOutput searchResults={youtubePedalResults} pedalsOnBoard={pedalsOnBoard} />
        <HistoryModal
          loadSavedBuild={loadBuild}
          showModal={showHistoryModal}
          closeModalHandler={closeHistoryModal}
          buildHistory={buildHistory}
          deleteBuild={deleteBuild}
        />

        <SaveCompleteModal closeModal={closeSaveModal} showModal={showSaveCompleteModal} />
        <UpdateCompleteModal closeModal={closeUpdateModal} showModal={showUpdateModal} />
      </Fragment>
    )
  }
}

const mapStateToProps = ({ builder, auth }) => ({
  authData: auth.data,
  totalPrice: builder.totalPrice,
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
  showHistoryModal: builder.showHistoryModal,
  showUpdateModal: builder.showUpdateModal
})

const mapDispatchToProps = dispatch => ({
  openUpdateModal: () => dispatch(actions.openUpdateModal()),
  closeUpdateModal: () => dispatch(actions.closeUpdateModal()),
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
  loadBuild: id => dispatch(actions.loadBuild(id)),
  updateBuild: () => dispatch(actions.updateBuild()),
  initCurrentPedalboard: pedalboard =>
    dispatch(actions.initCurrentPedalboard(JSON.parse(sessionStorage.getItem('data')))),
  initPedals: () => dispatch(actions.initPedals()),
  initBuildHistory: () => dispatch(actions.initBuildHistory())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Builder)
