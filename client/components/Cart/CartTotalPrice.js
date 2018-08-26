import React from 'react'
import { Item, Container, Header, Icon } from 'semantic-ui-react'

const CartTotalPrice = ({ totalPrice }) => (
  <Container>
    <Item>
      <Header floated="left" as="h3" style={{ margin: '0' }}>
        Total Price
      </Header>
      <Header floated="right" as="h3" style={{ margin: '0' }}>
        <strong>
          <Icon color="green" name="money bill alternate" />
          ${totalPrice.toFixed(2)}
        </strong>
      </Header>
    </Item>
  </Container>
)

export default CartTotalPrice
