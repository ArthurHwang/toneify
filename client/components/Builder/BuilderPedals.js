import React from 'react'
import { Image, Icon } from 'semantic-ui-react'
import Draggable from 'react-draggable'

const BuilderPedals = ({ mouseLeave, mouseOver, rotate, pedals, deletePedal }) => {
  const styles = {
    pedals: {
      display: 'flex',
      flexDirection: 'row',
      position: 'absolute',
      top: '20%',
      left: '29%'
    },
    iconRotate: {
      fontSize: '35px',
      zIndex: '2000',
      color: '#bc003f',
      position: 'absolute',
      top: '-5px',
      left: '34%'
    },
    iconDelete: {
      fontSize: '40px',
      zIndex: '2000',
      color: '#bc003f',
      position: 'absolute',
      bottom: '-25px',
      left: '32%'
    },
    image: {
      height: '200px',
      width: '135px',
      position: 'relative',
      display: 'inline-block'
    }
  }

  return (
    <div style={styles.pedals}>
      {pedals.map((elem, index) => (
        <Draggable key={elem.id}>
          <div>
            {elem.showButtons && (
              <Icon
                onMouseEnter={event => mouseOver(elem.id, event)}
                onMouseLeave={event => mouseLeave(elem.id, event)}
                style={styles.iconRotate}
                onClick={event => rotate(elem.id, event)}
                name="refresh"
              />
            )}
            <Image
              onMouseEnter={event => mouseOver(elem.id, event)}
              onMouseLeave={event => mouseLeave(elem.id, event)}
              item={elem}
              src={elem.image}
              style={{
                ...styles.image,
                transform: `rotate(${elem.rotation}deg)`
              }}
            />
            {elem.showButtons && (
              <Icon
                onMouseEnter={event => mouseOver(elem.id, event)}
                onMouseLeave={event => mouseLeave(elem.id, event)}
                style={styles.iconDelete}
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
