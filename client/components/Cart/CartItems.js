import React, { Fragment } from 'react'
import { Item, Divider, Container } from 'semantic-ui-react'

const CartItems = ({ pedalsOnBoard, currentPedalboard, totalPrice }) => (
  <Container>
    <Item.Group>
      <Item>
        <Item.Image src={currentPedalboard.image} size="mini" />
        <Item.Content verticalAlign="middle">
          <Item.Header>{currentPedalboard.brand}</Item.Header>
          <Item.Meta> {currentPedalboard.model}</Item.Meta>
        </Item.Content>
        <h3 style={{ margin: '0' }}>{currentPedalboard.price}</h3>
      </Item>
      <Divider />
      {pedalsOnBoard.map(pedal => (
        <Fragment key={pedal.id}>
          <Item>
            <Item.Image src={pedal.image} size="mini" />
            <Item.Content verticalAlign="middle">
              <Item.Header>{pedal.brand}</Item.Header>
              <Item.Meta>{pedal.model}</Item.Meta>
            </Item.Content>
            <h3 style={{ margin: '0' }}>{pedal.price}</h3>
          </Item>
          <Divider />
        </Fragment>
      ))}
    </Item.Group>
  </Container>
)

export default CartItems
