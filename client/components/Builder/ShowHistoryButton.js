import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ShowHistoryButton = ({ showButton, showModal }) => {
  const styles = {
    button: {
      height: '48px',
      width: '150px'
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
  const buttonOutput = showButton.length > 0 && (
    <Button color="black" onClick={showModal} className="show-history-button" style={styles.button}>
      <Icon style={styles.icon} size="large" color="orange" name="history" />
      <span style={styles.text}>History</span>
    </Button>
  )

  return buttonOutput
}

export default ShowHistoryButton
