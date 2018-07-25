import React, { Component, Fragment } from 'react'
import Nav from '../Nav/Nav'
// import Modal from '../Modal/Modal'
// import PedalBoards from '../PedalBoards/PedalBoards'

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
