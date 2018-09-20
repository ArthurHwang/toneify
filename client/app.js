import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Builder from './containers/Builder'
import PedalBoards from './containers/PedalboardsView'
import Pedals from './containers/PedalsView'
import Login from './containers/Login'
import Logout from './containers/Logout'
import Cart from './containers/Cart'
import AccountHistory from './containers/AccountHistory'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <Switch>
            <Route path="/pedals" component={Pedals} />
            <Route path="/builder" component={Builder} />
            <Route path="/pedalboards" component={PedalBoards} />
            <Route path="/cart" component={Cart} />
            <Route path="/history" component={AccountHistory} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/" component={PedalBoards} />
          </Switch>
        </Layout>
      </Fragment>
    )
  }
}

export default App
