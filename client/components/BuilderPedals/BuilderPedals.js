import React from 'react'
import { Image } from 'semantic-ui-react'

const builderPedals = ({ pedals }) => {
  let pedalOutput = pedals.map((elem, index) => {
    return (
      <Image
        key={index}
        style={{
          height: '200px',
          width: '135px',
          position: 'relative',
          display: 'inline-block'
        }}
        src={elem.image}
      />
    )
  })
  return pedalOutput
}

export default builderPedals
