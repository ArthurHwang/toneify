import React, { Fragment } from 'react'
import { Container, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const LandingPage = () => (
  <Fragment>
    <Container className="landing-header">
      <h1>toneify</h1>
      <Link style={{ color: 'white' }} to="/pedalboards">
        <Button className="landing-button" color="black">
          Start
        </Button>
      </Link>
    </Container>

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
