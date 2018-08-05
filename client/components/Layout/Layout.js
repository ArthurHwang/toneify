import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Nav from '../Nav/Nav'

class Layout extends Component {
  state = {
    hash: null
  }

  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      this.setState({ hash: location.pathname })
    })
  }

  componentWillUnmount() {
    this.unlisten()
  }

  render() {
    const navOutput = this.state.hash === '/' ? null : <Nav />
    return (
      <Fragment>
        {navOutput}
        <main>{this.props.children}</main>
      </Fragment>
    )
  }
}

export default withRouter(Layout)
