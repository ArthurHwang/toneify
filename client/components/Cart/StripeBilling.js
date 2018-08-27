import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { Container, Message } from 'semantic-ui-react'

class Payments extends Component {
  render() {
    return (
      <Container>
        <StripeCheckout
          style={{ float: 'right', marginTop: '5px' }}
          amount={this.props.amount * 100}
          token={token => console.log(token)}
          stripeKey="pk_test_DnbMQwRiJo2rAXTS6QxmbgmA"
        />
      </Container>
    )
  }
}

export default Payments
