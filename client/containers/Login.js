import React from 'react'
import { Container, Button, Icon, Card } from 'semantic-ui-react'

const Login = props => {
  const styles = {
    container: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      height: 'calc(100vh - 54.125px)'
    },
    button: {
      margin: '5px auto'
    },
    icon: {
      fontSize: '1.1em',
      marginRight: '8px'
    },
    card: {
      margin: 'auto',
      width: '40%'
    }
  }
  return (
    <Container style={styles.container}>
      <Card style={styles.card} raised>
        <Card.Content>
          <Card.Header textAlign="center">Log In</Card.Header>
          <Card.Description textAlign="center">Please select desired portal</Card.Description>
        </Card.Content>
        <Card.Content>
          <a href="/auth/google">
            <Button fluid style={styles.button} color="google plus">
              <Icon name="google" />
              Connect with Google+
            </Button>
          </a>
          <a href="/auth/facebook">
            <Button fluid style={styles.button} color="facebook">
              <i style={styles.icon} className="fab fa-facebook-f" />
              Connect with Facebook
            </Button>
          </a>
        </Card.Content>
      </Card>
    </Container>
  )
}

export default Login
