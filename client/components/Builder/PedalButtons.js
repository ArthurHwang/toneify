import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

class PedalButtons extends Component {
  render() {
    let pedalButton = null
    switch (this.props.type) {
      case 'rotate':
        pedalButton = (
          <Icon
            size="large"
            className="icon-rotate"
            onMouseEnter={this.props.mouseEnter}
            onMouseLeave={this.props.mouseLeave}
            onClick={this.props.rotate}
            name="refresh"
          />
        )
        break
      case 'delete':
        pedalButton = (
          <Icon
            size="big"
            className="icon-delete"
            onMouseEnter={this.props.mouseEnter}
            onMouseLeave={this.props.mouseLeave}
            onClick={this.props.deletePedal}
            name="delete"
          />
        )
        break
      default:
        pedalButton = null
    }
    return pedalButton
  }
}

export default PedalButtons
