import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

class Nav extends Component {
  state = { activeItem: 'pedalboards' }

  componentDidMount() {
    this.props.initUser()
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  renderContent() {
    switch (this.props.authData) {
      case null:
        return <Link to="/login">Login</Link>
      default:
        return <a href="/auth/api/logout">Logout</a>
    }
  }

  render() {
    console.log(this.props)
    const { activeItem } = this.state

    return (
      <Menu style={{ borderRadius: '0', height: '10px' }} size="small" inverted>
        <Link to="/">
          <Menu.Item
            style={{ width: '120px', height: '40px' }}
            onClick={this.handleItemClick}
            active={activeItem === '/'}
            name="/"
          >
            <img className="logo" src="https://image.flaticon.com/icons/svg/199/199449.svg" alt="logo" />
            <span className="title-text">toneify</span>
          </Menu.Item>
        </Link>
        <Link to="/pedalboards">
          <Menu.Item onClick={this.handleItemClick} name="pedalboards" active={activeItem === 'pedalboards'}>
            Pedalboards
          </Menu.Item>
        </Link>
        <Link to="/pedals">
          <Menu.Item onClick={this.handleItemClick} name="pedals" active={activeItem === 'pedals'}>
            Pedals
          </Menu.Item>
        </Link>
        <Link to="/builder">
          <Menu.Item onClick={this.handleItemClick} name="builder" active={activeItem === 'builder'}>
            Builder
          </Menu.Item>
        </Link>

        <Menu.Item position="right" onClick={this.handleItemClick} name="login" active={activeItem === 'login'}>
          {this.renderContent()}
        </Menu.Item>
        <Menu.Item onClick={this.handleItemClick} name="checkout" active={activeItem === 'checkout'}>
          <Link to="/checkout">Checkout</Link>
        </Menu.Item>
      </Menu>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  authData: auth.data
})

const mapDispatchToProps = dispatch => ({
  initUser: () => dispatch(actions.fetchUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav)
