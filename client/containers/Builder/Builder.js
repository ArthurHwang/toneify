import React, { Component, Fragment } from 'react'
import PedalboardBuilderDisplay from '../../components/PedalboardBuilderDisplay/PedalboardBuilderDisplay'

class Builder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPedalboard: null
    }
  }

  componentWillMount() {
    this.setState({
      currentPedalboard: this.props.location.state.currentPedalboard
    })
  }

  render() {
    return (
      <Fragment>
        <h1 className="title-text">PedalBuilder</h1>
        <PedalboardBuilderDisplay
          currentPedalboard={this.state.currentPedalboard}
        />
      </Fragment>
    )
  }
}

export default Builder
