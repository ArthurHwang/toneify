import React from 'react'
import { Image } from 'semantic-ui-react'

const builderPedals = ({ pedals }) => (
  <div style={{ position: 'absolute', top: '20%', left: '29%' }}>
    {pedals.map((elem, index) => (
      <Image
        key={elem.model}
        src={elem.image}
        style={{
          height: '200px',
          width: '135px',
          position: 'relative',
          display: 'inline-block'
        }}
      />
    ))}
  </div>
)

export default builderPedals
