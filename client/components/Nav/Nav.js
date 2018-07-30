import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Nav = props => (
  <Menu inverted stackable>
    <Menu.Item>
      <Link to="/">
        <img
          className="logo"
          src="https://image.flaticon.com/icons/svg/199/199449.svg"
        />
        <span className="title-text">toneify</span>
      </Link>
    </Menu.Item>
    <Menu.Item name="pedalboards">
      <Link to="/pedalboards">Pedalboards</Link>
    </Menu.Item>
    <Menu.Item name="pedals">
      <Link to="/pedals">Pedals</Link>
    </Menu.Item>
    <Menu.Item name="builder">
      <Link to="/builder">Builder</Link>
    </Menu.Item>
  </Menu>
)

export default Nav
