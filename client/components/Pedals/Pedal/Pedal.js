import React from 'react'
import { Icon, Card, Image } from 'semantic-ui-react'

const pedal = ({ id, price, brand, model, description, image, type }) => {
  return (
    <Card raised>
      <Image
        src={image}
        style={{
          height: '200px',
          width: '135px',
          // height: '250px',
          // width: '135px',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          margin: '15px 15px 15px 25%'
        }}
      />
      <Card.Content extra>
        <Card.Header>{brand}</Card.Header>
        <Card.Meta>
          <span style={{ color: '#bc003f' }}>{model}</span>
        </Card.Meta>
        <Card.Meta>
          <span style={{ color: '#bc003f' }}>{type}</span>
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

export default pedal
