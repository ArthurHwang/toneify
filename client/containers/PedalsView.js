import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Pedals from '../components/Pedals/Pedals'
import PedalsModal from '../components/Modal/PedalsModal'
import * as actions from '../store/actions/index'

class PedalsView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pedals: [],
      currentPedal: {},
      modalOpen: false
    }
  }

  componentDidMount() {
    fetch('/api/pedals', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ pedals: data })
      })
      .catch(err => console.log(err))
  }

  handlePedalClick = (id, event) => {
    const foundPedal = this.state.pedals.find((elem, index) => {
      if (elem.id === id) {
        return elem
      }
    })
    this.setState({ modalOpen: true, currentPedal: foundPedal })
  }

  handleModalClick = event => {
    this.setState({ modalOpen: false })
  }

  handleBuildClick = id => {
    this.props.addPedal(id)
    this.props.history.push({
      pathname: '/builder'
    })
  }

  render() {
    const { pedals, currentPedal, modalOpen } = this.state
    return (
      <Fragment>
        <PedalsModal
          handleClick={this.handleModalClick}
          pedalData={currentPedal}
          modalOpen={modalOpen}
          handleBuildClick={this.handleBuildClick}
        />
        <Pedals handleClick={this.handlePedalClick} pedalData={pedals} />
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addPedal: id => dispatch(actions.addPedal(id))
})

export default connect(
  null,
  mapDispatchToProps
)(PedalsView)
