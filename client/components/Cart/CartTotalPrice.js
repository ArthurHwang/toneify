import React from 'react'
import { Item, Container, Button } from 'semantic-ui-react'

const CartTotalPrice = ({ totalPrice }) => (
  <Container>
    <Item>
      <h3 style={{ margin: '0', display: 'inline', float: 'left' }}>Total Price</h3>
      <h3 style={{ margin: '0', display: 'inline', float: 'right' }}>${totalPrice}</h3>
    </Item>
  </Container>
)

export default CartTotalPrice
