import React from 'react'
import { Message, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const WarningMessage = () => (
  <Container
    style={{
      width: '25%'
    }}>
    <Message
      color="black"
      header="No Pedalboard Selected"
      content="Please select a pedalboard to continue"
    />
    <Link style={{ marginLeft: '22px' }} to="/pedalboards">
      Go to Pedalboards Page
    </Link>
  </Container>
)

export default WarningMessage
