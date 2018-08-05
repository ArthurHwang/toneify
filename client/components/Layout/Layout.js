import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Nav from '../Nav/Nav'

class Layout extends Component {
  render() {
    return (
      <Fragment>
        {this.props.location.pathname !== '/' && <Nav />}
        <main>{this.props.children}</main>
      </Fragment>
    )
  }
}

export default withRouter(Layout)
