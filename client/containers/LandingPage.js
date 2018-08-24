import React, { Fragment, Component } from 'react'
import { Container, Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <Container className="landing-header">
          <h1>toneify</h1>

          <a href="/auth/google">
            <Button className="landing-button" color="google plus">
              Google Plus
            </Button>
          </a>

          <a href="/auth/facebook">
            <Button className="landing-button" color="facebook">
              Facebook
            </Button>
          </a>
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
  }
}

export default withRouter(LandingPage)
