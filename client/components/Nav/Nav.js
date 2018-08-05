import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  state = { activeItem: '/' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
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
      </Menu>
    )
  }
}

export default Nav
