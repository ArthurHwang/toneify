import React from 'react'
import { Container, Button, Icon, Card } from 'semantic-ui-react'

const Logout = props => {
  const styles = {
    container: {
      position: 'relative',
      transform: 'translateY(150%)'
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
          <Card.Header textAlign="center">You Have Been Logged Out</Card.Header>
          <Card.Description textAlign="center">Would you like login again?</Card.Description>
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

export default Logout
