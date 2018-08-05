import React, { Component, Fragment } from 'react'
import { Button, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const LandingPage = () => (
  <Fragment>
    <div className="landing-header">
      <h1>toneify</h1>
      <p style={{ color: 'white' }} />
      <Button>
        <Link to="/pedalboards">Start</Link>
      </Button>
    </div>

    <ul className="slideshow">
      <li />
      <li />
      <li />
      <li />
      <li />
    </ul>
  </Fragment>
)

export default LandingPage
