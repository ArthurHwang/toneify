import React from 'react'
import PedalBoard from './Pedalboard/Pedalboard'
import { Container, Card } from 'semantic-ui-react'

const pedalBoards = ({ handleClick, pedalData }) => {
  return (
    <Container>
      <Card.Group itemsPerRow={4} className="ui center aligned grid">
        {pedalData.map((elem, index) => {
          return (
            <PedalBoard
              key={index}
              id={index}
              handleClick={handleClick}
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
