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
    const { activeItem } = this.state
    return (
      <Menu stackable style={{ borderRadius: '0' }} size="small" inverted>
        <Menu.Item
          style={{ width: '120px', height: '40px' }}
          onClick={this.handleItemClick}
          active={activeItem === '/'}
          name="/"
        >
          <Link to="/">
            <img className="logo" src="https://image.flaticon.com/icons/svg/199/199449.svg" alt="logo" />
            <span className="title-text">toneify</span>
          </Link>
        </Menu.Item>
        <Menu.Item onClick={this.handleItemClick} name="pedalboards" active={activeItem === 'pedalboards'}>
          <Link to="/pedalboards">Pedalboards</Link>
        </Menu.Item>
        <Menu.Item onClick={this.handleItemClick} name="pedals" active={activeItem === 'pedals'}>
          <Link to="/pedals">Pedals</Link>
        </Menu.Item>
        <Menu.Item onClick={this.handleItemClick} name="builder" active={activeItem === 'builder'}>
          <Link to="/builder">Builder</Link>
        </Menu.Item>
        <Menu.Item position="right" onClick={this.handleItemClick} name="login" active={activeItem === 'login'}>
          {this.renderContent()}
        </Menu.Item>
        <Menu.Item onClick={this.handleItemClick} name="cart" active={activeItem === 'cart'}>
          <Link to="/cart">Cart</Link>
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
