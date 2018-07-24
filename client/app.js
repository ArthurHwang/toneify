import React, { Component, Fragment } from 'react'
import Nav from './components/Nav/Nav'
import PedalBoards from './components/PedalBoards/PedalBoards'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pedalboards: []
    }
  }

  componentDidMount() {
    fetch('/pedalboards', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ pedalboards: data })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { pedalboards } = this.state
    return (
      <Fragment>
        <Nav />
        <PedalBoards pedalData={pedalboards} />
      </Fragment>
    )
  }
}

export default App
