import React from 'react'
import { Message } from 'semantic-ui-react'

const builderTitle = ({ pedalboardName }) => (
  <Message color="black" compact>
    <span style={{ fontSize: '1.2rem', color: '#bc003f' }}>Pedalboard: </span>
    <strong>
      {pedalboardName.brand} {pedalboardName.model}
    </strong>
  </Message>
)

export default builderTitle
