import React, { Component } from 'react'
import { connect } from 'react-redux'
import HistoryItems from '../components/History/HistoryItems'

class AccountHistory extends Component {
  render() {
    return <HistoryItems data={this.props.authData.purchaseHistory} />
  }
}

const mapStateToProps = ({ auth }) => ({
  authData: auth.data
})

export default connect(
  mapStateToProps,
  null
)(AccountHistory)
