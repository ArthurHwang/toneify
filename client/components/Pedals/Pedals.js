import React from 'react'
import { Container, Card } from 'semantic-ui-react'
import Pedal from './Pedal/Pedal'

const pedals = ({ pedalData, handleClick }) => (
  <Container>
    <Card.Group itemsPerRow={4} className="ui center aligned grid">
      {pedalData.map((elem, index) => (
        <Pedal
          handleClick={handleClick}
          key={elem.model}
          id={elem.id}
          image={elem.image}
          brand={elem.brand}
          description={elem.description}
          model={elem.model}
          price={elem.price}
          type={elem.type}
        />
      ))}
    </Card.Group>
  </Container>
)

export default pedals
