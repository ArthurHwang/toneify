import React from 'react'
import { Image, Icon } from 'semantic-ui-react'
import Draggable from 'react-draggable'

const BuilderPedals = ({ mouseLeave, mouseOver, rotate, pedals }) => {
  const styles = {
    pedals: {
      display: 'flex',
      flexDirection: 'row',
      position: 'absolute',
      top: '20%',
      left: '29%'
    },
    icon: {
      fontSize: '40px',
      zIndex: '2000',
      color: '#bc003f',
      position: 'absolute',
      top: '-5px',
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
            {elem.showRotate && (
              <Icon
                onMouseEnter={event => mouseOver(elem.id, event)}
                onMouseLeave={event => mouseLeave(elem.id, event)}
                style={styles.icon}
                onClick={event => rotate(elem.id, event)}
                name="undo"
              />
            )}
            <Image
              onMouseEnter={event => mouseOver(elem.id, event)}
              onMouseLeave={event => mouseLeave(elem.id, event)}
              id={elem.id}
              item={elem}
              src={elem.image}
              style={{
                ...styles.image,
                transform: `rotate(${elem.rotation}deg)`
              }}
            />
          </div>
        </Draggable>
      ))}
    </div>
  )
}

export default BuilderPedals
