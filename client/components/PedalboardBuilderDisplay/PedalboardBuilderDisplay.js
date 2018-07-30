import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

class PedalboardBuilderDisplay extends Component {
  render() {
    return (
      <div>
        <Image size="massive" src={this.props.currentPedalboard.topView} centered />
      </div>
    )
  }
}

export default PedalboardBuilderDisplay
