import React from 'react'
import { Image } from 'semantic-ui-react'
import Draggable from 'react-draggable'
import PedalButtons from './PedalButtons'

const BuilderPedals = ({  mouseLeave, mouseOver, rotate, pedals, deletePedal, onDrag, getId }) => (
  <div className="pedal-on-board-container">
    {pedals.map(elem => (
      <Draggable
        handle=".handle"
        defaultPosition={{ x: elem.posX, y: elem.posY }}
        onMouseDown={() => getId(elem.id)}
        onDrag={onDrag}
        key={elem.id}
      >
        <div style={{ position: 'relative' }}>
          {elem.showButtons && (
            <PedalButtons
              mouseEnter={() => mouseOver(elem.id)}
              mouseLeave={() => mouseLeave(elem.id)}
              rotate={() => rotate(elem.id)}
              type="rotate"
            />
          )}
          <div className="handle">
            {elem.showButtons && (
              <PedalButtons mouseEnter={() => mouseOver(elem.id)} mouseLeave={() => mouseLeave(elem.id)} type="drag" />
            )}
          </div>

          <Image
            className="pedal-on-board"
            onMouseEnter={() => mouseOver(elem.id)}
            onMouseLeave={() => mouseLeave(elem.id)}
            src={elem.image}
            style={{
              transform: `rotate(${elem.rotation}deg)`
            }}
          />
          {elem.showButtons && (
            <PedalButtons
              mouseEnter={() => mouseOver(elem.id)}
              mouseLeave={() => mouseLeave(elem.id)}
              deletePedal={() => deletePedal(elem.id)}
              type="delete"
            />
          )}
        </div>
      </Draggable>
    ))}
  </div>
)

export default BuilderPedals
