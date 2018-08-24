import React, { Fragment, Component } from 'react'
import { Container, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../store/actions/index'

class LandingPage extends Component {
  componentDidMount() {
    this.props.initUser()
  }

  render() {
    return (
      <Fragment>
        {/* <Container className="landing-header">
          <Button onClick={this.clicker} className="landing-buttadsfon" color="faasfdsfcebook">
            Facasdfadsfebook
          </Button>
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
          </a> */}
        {/* </Container> */}
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
)(LandingPage)
