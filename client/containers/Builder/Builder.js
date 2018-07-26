import React, { Component, Fragment } from 'react'
import PedalboardBuilderDisplay from '../../components/PedalboardBuilderDisplay/PedalboardBuilderDisplay'

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
    let pedalBoardBuilder = null
    if (this.state.currentPedalboard === null) {
      pedalBoardBuilder = <h1>Please pick a pedalboard!</h1>
    }
    if (this.state.currentPedalboard) {
      pedalBoardBuilder = (
        <Fragment>
          <h1 className="title-text">PedalBuilder</h1>
          <PedalboardBuilderDisplay
            currentPedalboard={this.state.currentPedalboard}
          />
        </Fragment>
      )
    }
    return <Fragment>{pedalBoardBuilder}</Fragment>
  }
}

export default Builder
