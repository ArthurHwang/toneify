import React, { Component, Fragment } from 'react'
import PedalboardBuilderDisplay from '../../components/PedalboardBuilderDisplay/PedalboardBuilderDisplay'
import WarningMessage from '../../components/WarningMessage/WarningMessage'
import BuilderTitle from '../../components/BuilderTitle/BuilderTitle'
import BuilderModal from '../../components/Modal/BuilderModal/BuilderModal'
import { Button, Icon } from 'semantic-ui-react'

import BuilderPedals from '../../components/BuilderPedals/BuilderPedals'

class Builder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPedalboard: null,
      pedals: [],
      pedalsOnBoard: [],
      showModal: true
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

  pedalAddHandler = (id, event) => {
    const findPedal = this.state.pedals.find((elem, index) => {
      if (elem.id === id) {
        return elem
      }
    })

    const updatePedalsOnBoard = [...this.state.pedalsOnBoard, findPedal]

    this.setState(
      { pedalsOnBoard: updatePedalsOnBoard, showModal: false },
      console.log(this.state.pedalsOnBoard)
    )
  }

  openModalHandler = () => {
    this.setState({ modalOpen: true }, console.log(this.state.modalOpen))
  }

  render() {
    // let modal = this.state.showModal ? (
    //   <BuilderModal
    //     handleClick={this.pedalAddHandler}
    //     pedalData={this.state.pedals}
    //   />
    // ) : null

    let pedalBoardBuilder = this.state.currentPedalboard ? (
      <Fragment>
        <BuilderTitle pedalboardName={this.state.currentPedalboard} />
        <PedalboardBuilderDisplay
          currentPedalboard={this.state.currentPedalboard}
        />
      </Fragment>
    ) : (
      <WarningMessage />
    )
    return (
      <Fragment>
        <Button
          onClick={this.openModalHandler}
          color="black"
          style={{
            marginTop: '10px',
            marginRight: '0',
            float: 'right',
            height: '48px',
            width: '150px',
            display: 'inline'
          }}>
          <Icon size="large" color="green" name="add" />
          <span
            style={{
              color: '#21ba45'
            }}>
            Add Pedal
          </span>
        </Button>
        {pedalBoardBuilder}
        {this.state.showModal ? (
          <BuilderModal
            handleClick={this.pedalAddHandler}
            pedalData={this.state.pedals}
          />
        ) : null}
        <BuilderPedals pedals={this.state.pedalsOnBoard} />
      </Fragment>
    )
  }
}

export default Builder
