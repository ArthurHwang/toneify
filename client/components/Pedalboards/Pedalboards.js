import React from 'react'
import PedalBoard from './Pedalboard/Pedalboard'
import { Container, Card } from 'semantic-ui-react'

const pedalBoards = ({ pedalData }) => {
  return (
    <Container>
      <Card.Group itemsPerRow={4} className="ui center aligned grid">
        {pedalData.map((elem, index) => {
          return (
            <PedalBoard
              image={elem.image}
              brand={elem.brand}
              description={elem.description}
              model={elem.model}
              price={elem.price}
            />
          )
        })}
      </Card.Group>
    </Container>
  )
}

export default pedalBoards
