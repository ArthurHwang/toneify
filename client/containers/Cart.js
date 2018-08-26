import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import CartItems from '../components/Cart/CartItems'
import CartTotalPrice from '../components/Cart/CartTotalPrice'

class Cart extends Component {
  render() {
    return (
      <Fragment>
        <CartItems pedalsOnBoard={this.props.pedalsOnBoard} currentPedalboard={this.props.currentPedalboard} />
        <CartTotalPrice totalPrice={this.props.totalPrice} />
      </Fragment>
    )
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
