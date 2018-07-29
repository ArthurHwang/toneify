import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
// import { DropTarget } from 'react-dnd'
//
// function collect(connect, monitor) {
//   console.log('what')
//   return {
//     connectDropTarget: connect.dropTarget(),
//     hovered: monitor.isOver(),
//     item: monitor.getItem()
//   }
// }

class PedalboardBuilderDisplay extends Component {
  render() {
    // const { connectDropTarget, hovered, item } = this.props
    return (
      <div>
        <Image size="massive" src={this.props.currentPedalboard.topView} centered />
      </div>
    )
  }
}

// }= ({ pedals, currentPedalboard }) => (
//
// )

// export default DropTarget('item', {}, collect)(PedalboardBuilderDisplay)
export default PedalboardBuilderDisplay
