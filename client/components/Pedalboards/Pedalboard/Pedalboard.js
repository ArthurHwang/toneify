import React from 'react'
import { Icon, Button, Card, Image } from 'semantic-ui-react'

const pedalBoard = ({
  id,
  handleClick,
  price,
  brand,
  model,
  description,
  image
}) => {
  return (
    <Card onClick={e => handleClick(id, e)}>
      <Image src={image} style={{ height: '150px', margin: '15px' }} />
      <Card.Content>
        <Card.Header>{brand}</Card.Header>
        <Card.Meta>{model}</Card.Meta>
        <Card.Description>
          <strong>
            <Icon name="money bill alternate" />
            {price}
          </strong>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default pedalBoard
