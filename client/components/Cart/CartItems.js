import React, { Fragment } from 'react'
import { Item, Divider, Container, Icon } from 'semantic-ui-react'

const CartItems = ({ pedalsOnBoard, currentPedalboard }) => (
  <Container>
    <Item.Group>
      <Item>
        <Item.Image src={currentPedalboard.image} size="mini" />
        <Item.Content verticalAlign="middle">
          <Item.Header>{currentPedalboard.brand}</Item.Header>
          <Item.Meta> {currentPedalboard.model}</Item.Meta>
        </Item.Content>
        <strong>
          <Icon color="green" name="money bill alternate" />
          ${currentPedalboard.price.toFixed(2)}
        </strong>
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
            <strong>
              <Icon color="green" name="money bill alternate" />
              ${pedal.price.toFixed(2)}
            </strong>
          </Item>
          <Divider />
        </Fragment>
      ))}
    </Item.Group>
  </Container>
)

export default CartItems
