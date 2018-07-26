import React, { Component, Fragment } from 'react'
import Pedals from '../../components/Pedals/Pedals'

class pedals extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pedals: []
    }
  }

  componentDidMount() {
    fetch('/pedals/', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ pedals: data })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { pedals } = this.state
    return (
      <Fragment>
        <Pedals pedalData={pedals} />
      </Fragment>
    )
  }
}

export default pedals
