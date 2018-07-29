import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import Draggable from 'react-draggable'

class builderPedals extends Component {
  render() {
    return (
      <div style={{ position: 'absolute', top: '20%', left: '29%' }}>
        {this.props.pedals.map((elem, index) => (
          <Draggable key={elem.id}>
            <Image
              id={elem.id}
              item={elem}
              src={elem.image}
              style={{
                height: '200px',
                width: '135px',
                position: 'relative',
                display: 'inline-block'
              }}
            />
          </Draggable>
        ))}
      </div>
    )
  }
}

export default builderPedals
