import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { Container, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

class Payments extends Component {
  render() {
    return (
      <Container textAlign="center">
        <StripeCheckout
          name="toneify"
          description="Custom Pedalboard Configuration"
          amount={this.props.amount * 100}
          token={(token, amount, pedalboard, pedals) =>
            this.props.handleToken(
              token,
              this.props.amount * 100,
              this.props.currentPedalboard,
              this.props.pedalsOnBoard
            )
          }
          stripeKey="pk_test_DnbMQwRiJo2rAXTS6QxmbgmA"
        >
          <Button primary>Checkout</Button>
        </StripeCheckout>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  handleToken: (token, amount, pedalboard, pedals) => dispatch(actions.handleToken(token, amount, pedalboard, pedals))
})

export default connect(
  null,
  mapDispatchToProps
)(Payments)
