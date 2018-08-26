import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cart extends Component {
  render() {
    return <h1>hi</h1>
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
