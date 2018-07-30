import React, { Component, Fragment } from 'react'
import PedalboardBuilderDisplay from '../../components/PedalboardBuilderDisplay/PedalboardBuilderDisplay'
import WarningMessage from '../../components/WarningMessage/WarningMessage'
import BuilderTitle from '../../components/BuilderTitle/BuilderTitle'
import BuilderModal from '../../components/Modal/BuilderModal/BuilderModal'
import BuilderPedals from '../../components/BuilderPedals/BuilderPedals'
import BuilderAddPedalButton from '../../components/BuilderAddPedalButton/BuilderAddPedalButton'

class Builder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPedalboard: null,
      pedals: [],
      pedalsOnBoard: [],
      showModal: false
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
    } else {
      this.setState({
        currentPedalboard: this.props.location.state.currentPedalboard
      })
    }
  }

  addPedal = (id, event) => {
    const findPedal = this.state.pedals.find((elem, index) => {
      if (elem.id === id) {
        return elem
      }
    })
    const updatePedalsOnBoard = [...this.state.pedalsOnBoard, findPedal]

    const withRotation = updatePedalsOnBoard.map((elem, index) => ({
      ...elem,
      rotation: elem.rotation || 0,
      showRotateButton: elem.showRotateButton || false
    }))

    this.setState({ showModal: false, pedalsOnBoard: withRotation })
  }

  openModalHandler = () => {
    this.setState({ showModal: true })
  }

  closeModalHandler = () => {
    this.setState({ showModal: false })
  }

  rotateButtonShow = (id, event) => {
    const copy = [...this.state.pedalsOnBoard]
    copy.forEach((elem, index) => {
      if (elem.id === id) {
        elem.showRotate = true
      }
    })

    this.setState({ pedalsOnBoard: copy })
  }

  rotateButtonHide = (id, event) => {
    const copy = [...this.state.pedalsOnBoard]

    copy.forEach((elem, index) => {
      if (elem.id === id) {
        elem.showRotate = false
      }
    })

    this.setState({ pedalsOnBoard: copy })
  }

  rotatePedal = (id, event) => {
    const copy = [...this.state.pedalsOnBoard]

    copy.forEach((elem, index) => {
      if (elem.id === id) {
        elem.rotation >= 360 ? (elem.rotation = 0) : (elem.rotation += 90)
      }
    })
    this.setState({ pedalsOnBoard: copy })
  }

  render() {
    const { pedals, showModal, currentPedalboard, pedalsOnBoard } = this.state
    const pedalBoardBuilder = (
      <Fragment>
        <BuilderTitle pedalboardName={currentPedalboard} />
        <PedalboardBuilderDisplay currentPedalboard={currentPedalboard} />
      </Fragment>
    )
    return (
      <Fragment>
        <BuilderAddPedalButton
          showButton={currentPedalboard}
          showModal={this.openModalHandler}
        />
        <BuilderModal
          closeModalHandler={this.closeModalHandler}
          showModal={showModal}
          pedalData={pedals}
          handleClick={this.addPedal}
        />
        {currentPedalboard ? pedalBoardBuilder : <WarningMessage />}
        <BuilderPedals pedals={pedalsOnBoard} />
      </Fragment>
    )
  }
}
export default Builder
