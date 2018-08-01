import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  state = { activeItem: '/' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu style={{ borderRadius: '0' }} size="large" inverted stackable>
        <Menu.Item
          onClick={this.handleItemClick}
          active={activeItem === '/'}
          name="/">
          <Link to="/">
            <img
              className="logo"
              src="https://image.flaticon.com/icons/svg/199/199449.svg"
            />
            <span className="title-text">toneify</span>
          </Link>
        </Menu.Item>
        <Menu.Item
          onClick={this.handleItemClick}
          active={activeItem === 'pedalboards'}
          name="pedalboards">
          <Link to="/pedalboards">Pedalboards</Link>
        </Menu.Item>
        <Menu.Item
          onClick={this.handleItemClick}
          active={activeItem === 'pedals'}
          name="pedals">
          <Link to="/pedals">Pedals</Link>
        </Menu.Item>
        <Menu.Item
          onClick={this.handleItemClick}
          active={activeItem === 'builder'}
          name="builder">
          <Link to="/builder">Builder</Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default Nav
