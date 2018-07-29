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
    }
    else {
      this.setState({
        currentPedalboard: this.props.location.state.currentPedalboard
      })
    }
  }

  pedalAddHandler = (id, event) => {
    const findPedal = this.state.pedals.find((elem, index) => {
      if (elem.id === id) {
        return elem
      }
    })

    const updatePedalsOnBoard = [...this.state.pedalsOnBoard, findPedal]

    this.setState({ showModal: false, pedalsOnBoard: updatePedalsOnBoard })
  }

  openModalHandler = () => {
    this.setState({ showModal: true })
  }

  closeModalHandler = () => {
    this.setState({ showModal: false })
  }

  render() {
    let pedalBoardBuilder = this.state.currentPedalboard ? (
      <Fragment>
        <BuilderTitle pedalboardName={this.state.currentPedalboard} />
        <PedalboardBuilderDisplay currentPedalboard={this.state.currentPedalboard} />
      </Fragment>
    ) : (
      <WarningMessage />
    )
    return (
      <Fragment>
        <BuilderAddPedalButton showButton={this.state.currentPedalboard} showModal={this.openModalHandler} />
        <BuilderModal
          closeModalHandler={this.closeModalHandler}
          showModal={this.state.showModal}
          pedalData={this.state.pedals}
          handleClick={this.pedalAddHandler}
        />
        {pedalBoardBuilder}
        <BuilderPedals pedals={this.state.pedalsOnBoard} />
      </Fragment>
    )
  }
}

export default Builder
