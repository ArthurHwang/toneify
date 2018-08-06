import React from 'react'
import { Image, Container } from 'semantic-ui-react'
import Draggable from 'react-draggable'
import PedalButtons from './PedalButtons'

const BuilderPedals = ({ mouseLeave, mouseOver, rotate, pedals, deletePedal, onDrag, getId }) => (
  <div className="pedal-on-board-container">
    {pedals.map((elem, index) => (
      <Draggable
        defaultPosition={{ x: elem.posX, y: elem.posY }}
        onMouseDown={() => getId(elem.id)}
        onDrag={onDrag}
        key={elem.id}
      >
        <span style={{ position: 'relative' }}>
          {elem.showButtons && (
            <PedalButtons
              mouseEnter={() => mouseOver(elem.id)}
              mouseLeave={() => mouseLeave(elem.id)}
              rotate={() => rotate(elem.id)}
              type="rotate"
            />
          )}
          <Image
            className="pedal-on-board"
            onMouseEnter={() => mouseOver(elem.id)}
            onMouseLeave={() => mouseLeave(elem.id)}
            item={elem}
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
        </span>
      </Draggable>
    ))}
  </div>
)

export default BuilderPedals
