import React, { Fragment, Component } from 'react'
import { Container, Button, Icon } from 'semantic-ui-react'
import { Link, Redirect, withRouter } from 'react-router-dom'

class LandingPage extends Component {
  handleClick = event => {
    const socialName = event.target.name
    console.log(socialName)
    // this.props.history.push(`/auth/${socialName}`)
    fetch('/auth/google').then(res => console.log(res))
    // .then(data => console.log(data))
  }

  render() {
    return (
      <Fragment>
        <Container className="landing-header">
          <h1>toneify</h1>

          <Button name="google" onClick={this.handleClick} className="landing-button" color="google plus">
            <Icon name="google plus" /> Google Plus
          </Button>

          <Button name="facebook" onClick={this.handleClick} className="landing-button" color="facebook">
            <Icon name="facebook" /> Facebook
          </Button>
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
