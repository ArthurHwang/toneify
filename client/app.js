import React, { Component, Fragment } from 'react'
import PedalBoards from './containers/PedalboardsView/PedalboardsView'
import { Switch, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Builder from './containers/Builder/Builder'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <Switch>
            <Route path="/builder" component={Builder} />
            <Route path="/" component={PedalBoards} />
          </Switch>
        </Layout>
      </Fragment>
    )
  }
}

export default App
