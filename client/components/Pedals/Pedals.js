import React from 'react'
import Pedal from './Pedal/Pedal'
import { Container, Card } from 'semantic-ui-react'

const pedals = ({ pedalData }) => {
  return (
    <Container>
      <Card.Group itemsPerRow={4} className="ui center aligned grid">
        {pedalData.map((elem, index) => {
          return (
            <Pedal
              key={index}
              id={elem.id}
              image={elem.image}
              brand={elem.brand}
              description={elem.description}
              model={elem.model}
              price={elem.price}
              type={elem.type}
            />
          )
        })}
      </Card.Group>
    </Container>
  )
}

export default pedals
