import React from 'react'
import { Image, Icon } from 'semantic-ui-react'
import Draggable from 'react-draggable'

const BuilderPedals = ({
  mouseLeave,
  mouseOver,
  rotate,
  pedals,
  deletePedal
}) => {
  return (
    <div className="pedal-on-board-container">
      {pedals.map((elem, index) => (
        <Draggable key={elem.id}>
          <div>
            {elem.showButtons && (
              <Icon
                size="large"
                className="icon-rotate"
                onMouseEnter={event => mouseOver(elem.id, event)}
                onMouseLeave={event => mouseLeave(elem.id, event)}
                onClick={event => rotate(elem.id, event)}
                name="refresh"
              />
            )}
            <Image
              className="pedal-on-board"
              onMouseEnter={event => mouseOver(elem.id, event)}
              onMouseLeave={event => mouseLeave(elem.id, event)}
              item={elem}
              src={elem.image}
              style={{
                transform: `rotate(${elem.rotation}deg)`
              }}
            />
            {elem.showButtons && (
              <Icon
                size="big"
                className="icon-delete"
                onMouseEnter={event => mouseOver(elem.id, event)}
                onMouseLeave={event => mouseLeave(elem.id, event)}
                onClick={event => deletePedal(elem.id, event)}
                name="delete"
              />
            )}
          </div>
        </Draggable>
      ))}
    </div>
  )
}

export default BuilderPedals
