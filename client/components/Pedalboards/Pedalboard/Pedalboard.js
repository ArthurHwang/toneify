import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const pedalBoard = ({ price, brand, model, description, image }) => {
  return (
    <Card>
      <Image src={image} style={{ height: '150px', margin: '15px' }} />
      <Card.Content>
        <Card.Header>{brand}</Card.Header>
        <Card.Meta>{model}</Card.Meta>
        <Card.Description>
          <strong>{price}</strong>
        </Card.Description>
        <Card.Description>{description.slice(0, 200) + '...'}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default pedalBoard
