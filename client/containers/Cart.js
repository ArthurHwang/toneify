import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import CartItems from '../components/Cart/CartItems'
import CartTotalPrice from '../components/Cart/CartTotalPrice'
import CartCheckoutButton from '../components/Cart/CartCheckoutButton'

class Cart extends Component {
  render() {
    let cart = this.props.currentPedalboard ? (
      <Fragment>
        <CartItems pedalsOnBoard={this.props.pedalsOnBoard} currentPedalboard={this.props.currentPedalboard} />
        <CartTotalPrice totalPrice={this.props.totalPrice} />
        <CartCheckoutButton />
      </Fragment>
    ) : (
      <h3 className="checkout-empty-warning">Please add items to your build</h3>
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
