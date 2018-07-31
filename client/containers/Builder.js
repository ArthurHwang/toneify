import React, { Component, Fragment } from 'react'
import PedalboardBuilderDisplay from '../components/Builder/PedalboardBuilderDisplay'
import WarningMessage from '../components/Builder/WarningMessage'
import BuilderModal from '../components/Modal/BuilderModal'
import BuilderPedals from '../components/Builder/BuilderPedals'
import BuilderAddPedalButton from '../components/Builder/BuilderAddPedalButton'

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
    }
    else {
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
    copy.forEach(elem => {
      if (elem.id === id) {
        elem.showRotate = true
      }
    })

    this.setState({ pedalsOnBoard: copy })
  }

  rotateButtonHide = (id, event) => {
    const copy = [...this.state.pedalsOnBoard]
    copy.forEach(elem => {
      if (elem.id === id) {
        elem.showRotate = false
      }
    })

    this.setState({ pedalsOnBoard: copy })
  }

  rotatePedal = (id, event) => {
    const copy = [...this.state.pedalsOnBoard]
    copy.forEach(elem => {
      if (elem.id === id) {
        elem.rotation >= 360 ? (elem.rotation = 0) : (elem.rotation += 90)
      }
    })
    this.setState({ pedalsOnBoard: copy })
  }

  render() {
    const { pedals, showModal, currentPedalboard, pedalsOnBoard } = this.state
    return (
      <Fragment>
        <BuilderAddPedalButton showButton={currentPedalboard} showModal={this.openModalHandler} />
        <BuilderModal
          closeModalHandler={this.closeModalHandler}
          showModal={showModal}
          pedalData={pedals}
          handleClick={this.addPedal}
        />
        {currentPedalboard ? <PedalboardBuilderDisplay currentPedalboard={currentPedalboard} /> : <WarningMessage />}
        <BuilderPedals
          mouseLeave={this.rotateButtonHide}
          mouseOver={this.rotateButtonShow}
          rotate={this.rotatePedal}
          pedals={pedalsOnBoard}
        />
      </Fragment>
    )
  }
}
export default Builder
