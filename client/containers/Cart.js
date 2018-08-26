import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItems from '../components/Cart/CartItems'

class Cart extends Component {
  render() {
    return (
      <CartItems
        pedalsOnBoard={this.props.pedalsOnBoard}
        currentPedalboard={this.props.currentPedalboard}
        totalPrice={this.props.totalPrice}
      />
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
