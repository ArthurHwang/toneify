import React, { Component, Fragment } from 'react'
import PedalboardBuilderDisplay from '../../components/PedalboardBuilderDisplay/PedalboardBuilderDisplay'
import WarningMessage from '../../components/WarningMessage/WarningMessage'

class Builder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPedalboard: null
    }
  }

  componentDidMount() {
    if (!this.props.location.state) {
      this.setState({ currentPedalboard: null })
    }
    else {
      this.setState({
        currentPedalboard: this.props.location.state.currentPedalboard
      })
    }
  }

  render() {
    let pedalBoardBuilder = this.state.currentPedalboard ? (
      <Fragment>
        <h1 className="title-text">PedalBuilder</h1>
        <PedalboardBuilderDisplay
          currentPedalboard={this.state.currentPedalboard}
        />
      </Fragment>
    ) : (
      <WarningMessage />
    )
    return <Fragment>{pedalBoardBuilder}</Fragment>
  }
}

export default Builder
