import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'
import HistoryItems from '../components/History/HistoryItems'

class AccountHistory extends Component {
  render() {
    let historyRender = (
      <Message warning>
        <Message.Header>Please login to view your purchase history!</Message.Header>
      </Message>
    )
    if (this.props.authData) {
      historyRender = <HistoryItems data={this.props.authData.purchaseHistory} />
    }
    return historyRender
  }
}

const mapStateToProps = ({ auth }) => ({
  authData: auth.data
})

export default connect(
  mapStateToProps,
  null
)(AccountHistory)
