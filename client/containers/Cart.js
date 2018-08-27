import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Container, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import CartItems from '../components/Cart/CartItems'
import CartTotalPrice from '../components/Cart/CartTotalPrice'
import StripeBilling from '../components/Cart/StripeBilling'

const styles = {
  warning: {
    position: 'absolute',
    left: '0',
    right: '0',
    margin: 'auto',
    top: '45%',
    width: '25%'
  }
}

class Cart extends Component {
  render() {
    let cart = this.props.currentPedalboard ? (
      <Fragment>
        <CartItems pedalsOnBoard={this.props.pedalsOnBoard} currentPedalboard={this.props.currentPedalboard} />
        <CartTotalPrice totalPrice={this.props.totalPrice} />
        <StripeBilling
          pedalsOnBoard={this.props.pedalsOnBoard}
          currentPedalboard={this.props.currentPedalboard}
          amount={this.props.totalPrice}
        />
      </Fragment>
    ) : (
      <Container style={styles.warning}>
        <Message color="black" header="No Items Selected" content="Please add items to your build to view cart!" />
        <Link style={{ marginLeft: '22px' }} to="/pedalboards">
          Go to Pedalboards Page
        </Link>
      </Container>
    )
    return cart
  }
}

const mapStateToProps = ({ builder }) => ({
  pedalsOnBoard: builder.pedalsOnBoard,
  currentPedalboard: builder.currentPedalboard,
  totalPrice: builder.totalPrice
})

export default connect(
  mapStateToProps,
  null
)(Cart)
