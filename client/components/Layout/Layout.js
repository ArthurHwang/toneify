import React, { Component, Fragment } from 'react'
import Nav from '../Nav/Nav'

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <main>{this.props.children}</main>
      </Fragment>
    )
  }
}

export default Layout
