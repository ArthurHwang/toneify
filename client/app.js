import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Builder from './containers/Builder/Builder'
import PedalBoards from './containers/PedalboardsView/PedalboardsView'
import Pedals from './containers/PedalsView/PedalsView'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <Switch>
            <Route path="/pedals" component={Pedals} />
            <Route path="/builder" component={Builder} />
            <Route path="/pedalboards/" component={PedalBoards} />
            <Route
              path="/"
              render={() => <h1>Ready to get hella crunch tones?</h1>}
            />
          </Switch>
        </Layout>
      </Fragment>
    )
  }
}

export default App
