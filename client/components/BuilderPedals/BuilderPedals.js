import React, { Component } from 'react'
import { Image, Icon } from 'semantic-ui-react'
import Draggable from 'react-draggable'

class builderPedals extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', position: 'absolute', top: '20%', left: '29%' }}>
        {this.props.pedals.map((elem, index) => (
          <Draggable key={elem.id}>
            <div>
              {elem.showRotate ? (
                <Icon
                  onMouseEnter={event => this.props.mouseOver(elem.id, event)}
                  onMouseLeave={event => this.props.mouseLeave(elem.id, event)}
                  style={{
                    fontSize: '40px',
                    zIndex: '2000',
                    color: '#bc003f',
                    position: 'absolute',
                    top: '-5px',
                    left: '32%'
                  }}
                  onClick={event => this.props.rotate(elem.id, event)}
                  name="undo"
                />
              ) : null}

              <Image
                onMouseEnter={event => this.props.mouseOver(elem.id, event)}
                onMouseLeave={event => this.props.mouseLeave(elem.id, event)}
                id={elem.id}
                item={elem}
                src={elem.image}
                style={{
                  transform: `rotate(${elem.rotation}deg)`,
                  height: '200px',
                  width: '135px',
                  position: 'relative',
                  display: 'inline-block'
                }}
              />
            </div>
          </Draggable>
        ))}
      </div>
    )
  }
}

export default builderPedals
