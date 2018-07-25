import React from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const nav = props => (
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
    <Menu.Item name="features">
      <Link to="/pedalboards">Pedalboards</Link>
    </Menu.Item>
    <Menu.Item name="features">
      <Link to="/name=">Pedals</Link>
    </Menu.Item>
  </Menu>
)

export default nav
