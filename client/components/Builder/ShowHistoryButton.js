import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ShowHistoryButton = ({ showModal }) => {
  const styles = {
    button: {
      margin: '10px 0'
    },
    icon: {
      position: 'relative',
      bottom: '3px',
      left: '-15px'
    },
    text: {
      color: '#f2711c'
    }
  }
  const buttonOutput = (
    <Button
      onClick={showModal}
      color="black"
      className="show-history-button"
      style={styles.button}>
      <Icon style={styles.icon} size="large" color="orange" name="history" />
      <span style={styles.text}>History</span>
    </Button>
  )

  return buttonOutput
}

export default ShowHistoryButton
