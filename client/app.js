import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Builder from './containers/Builder'
import PedalBoards from './containers/PedalboardsView'
import Pedals from './containers/PedalsView'
import LandingPage from './containers/LandingPage'
import Login from './containers/Login'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <Switch>
            <Route path="/pedals" component={Pedals} />
            <Route path="/builder" component={Builder} />
            <Route path="/pedalboards" component={PedalBoards} />
            <Route path="/login" component={Login} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </Layout>
      </Fragment>
    )
  }
}

export default App
