import React from 'react'
import { Icon, Card, Image } from 'semantic-ui-react'

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
    <Card raised onClick={e => handleClick(id, e)}>
      <Image
        src={image}
        style={{
          height: '200px',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          margin: '15px'
        }}
      />
      <Card.Content>
        <Card.Header>{brand}</Card.Header>
        <Card.Meta>
          <span style={{ color: '#bc003f' }}>{model}</span>
        </Card.Meta>
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
