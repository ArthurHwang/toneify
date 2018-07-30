import React from 'react'
import { Container, Card } from 'semantic-ui-react'
import PedalBoard from './Pedalboard/Pedalboard'

const PedalBoards = ({ handleClick, pedalData }) => (
  <Container>
    <Card.Group itemsPerRow={4} className="ui center aligned grid">
      {pedalData.map((elem, index) => (
        <PedalBoard
          key={elem.model}
          id={elem.id}
          handleClick={handleClick}
          image={elem.image}
          brand={elem.brand}
          description={elem.description}
          model={elem.model}
          price={elem.price}
        />
      ))}
    </Card.Group>
  </Container>
)

export default PedalBoards
